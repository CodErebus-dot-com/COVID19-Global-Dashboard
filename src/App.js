import React, { useEffect, useState } from "react";
import "./App.css";
import Header from './components/Header'
import InfoBox from "./components/InfoBox";
import Overview from './components/Overview'
import DailySpreadTrends from "./components/DailySpreadTrends";
import CummulativeSpreadTrends from './components/CummulativeSpreadTrends'
import Map from "./components/Map";
import "leaflet/dist/leaflet.css"
import { sortData } from "./utils";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";

const useStyles = makeStyles((theme) => ({
  switcher: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: "flex",
    justifyContent: "flex-end"
  },
}));

const override = css`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
`;

const App = () => {
  const classes = useStyles();


  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("")
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [casesType, setCasesType] = useState("cases"); 
  const [mapCenter, setMapCenter] = useState({lat: 34.80746, lng: -40.4796})
  const [zoom, setZoom] = useState(3)
  const [mapCountries, setMapCountries] = useState([]);
  const [vaccineInfo, setVaccineInfo] = useState([])
  const [vaccineTotal, setVaccineTotal] = useState("")
  const [vaccineDaily, setVaccineDaily] = useState("")
  const [variantSwitch, setVariantSwitch] = useState("cummulative")
  let [loading, setLoading] = useState(true);

  const base_url = "https://disease.sh/v3/covid-19"
  const vaccine_url = "https://disease.sh/v3/covid-19/vaccine/coverage"
                                              
                                              

  useEffect(() => {
    fetch(base_url + "/all")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setCountryInfo(data);
        // console.log(countryInfo);
      })
      .catch((err) => {console.log("Lack of proper info! => ",err)})
  }, [countries]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch(base_url + "/countries")
        .then((response) => response.json())
        .then((data) => 
        {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          const sortedData = sortData(data);
          setLoading(false)
          setMapCountries(sortedData);
          setCountries(countries);
        })
        .catch((err) => {console.log("Lack of proper info! => ",err)})
    };

    getCountriesData();
  }, []);
    
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    setCountry(countryCode);

    const url = countryCode === "worldwide" ? base_url + "/all" :  base_url+`/countries/${countryCode}`

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryName(data.country)
        setCountryInfo(data);
        setLoading(false);
        // console.log(data);

        countryCode === "worldwide"
        ? setMapCenter([34.80746, -40.4796])
        : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        countryCode === "worldwide"
        ? setZoom(2)
        : setZoom(4)
        
      }); 

    // console.log(countryInfo);
  };

  useEffect(() => { 
    const getVaccineData = async() => {
      const url = country === "worldwide" ? vaccine_url + "?lastdays=all&fullData=true" 
      : vaccine_url + `/countries/${country}?lastdays=all&fullData=true`
      
      await fetch(url)
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        setVaccineInfo(data);

        const total = country === "worldwide" 
        ? data[data.length-2].total
        : data.timeline[data.timeline.length-2].total

        const daily = country === "worldwide"
        ? data[data.length-2].daily
        : data.timeline[data.timeline.length-2].daily

        setVaccineDaily(daily)
        setVaccineTotal(total)
      })
      .catch((err) => {console.log("Lack of proper info! => ",err)})
    }

    getVaccineData()
    
  }, [country, vaccineDaily, vaccineTotal])

  let spreadTrendVariant
  if(variantSwitch === "cummulative"){
    spreadTrendVariant = <CummulativeSpreadTrends className="app__lineGraph" country={country} />
  }
  else{
    spreadTrendVariant = <DailySpreadTrends className="app__lineGraph" country={country}/>
  }

  return (
    <>
      {loading ? (
        <GridLoader loading={loading} size={20} css={override} color={"indianred"} />
      ) : (
        <div className="app">      
          <div class="grid-container">
            
            <div class="grid1">
              
              {/* Header */}
              <div className="app__header">  
                <Header 
                  countries={countries}
                  country={country}
                  onCountryChange={onCountryChange}
                  name={countryName}
                  data={mapCountries}
                  casesType={casesType}
                />
              </div>
    
              
              {/* InfoBox */}
            <div className="app__stats">
              <InfoBox
                isRed 
                onClick={e => setCasesType("cases")}
                active={casesType==="cases"}
                title="Confirmed" 
                cases={countryInfo.todayCases + countryInfo.todayRecovered + countryInfo.todayDeaths} 
                total={countryInfo.cases}
                className="cases"
                country={country}
              />
              <InfoBox
                onClick={e => setCasesType("recovered")}
                active={casesType==="recovered"}
                title="Recovered" 
                cases={countryInfo.todayRecovered} 
                total={countryInfo.recovered}
                className="recovered"
                country={country}
              />
              <InfoBox
                isGrey
                onClick={e => setCasesType("deaths")}
                active={casesType==="deaths"}
                title="Deceased" 
                cases={countryInfo.todayDeaths} 
                total={countryInfo.deaths}
                className="deaths"
                country={country}
              />
            </div>
            
              {/* Graphs */}
              <div className="app__graph">
                <h1 style={{color: "#6c757d", display: "flex", justifyContent: "center"}}>Spread Trends</h1>
                <div className={classes.switcher}>
                  <Button className="button--switch" variant="contained" default color="primary" onClick={() => setVariantSwitch("cummulative")} >Cummulative</Button>
                  <Button className="button--switch" variant="contained" color="secondary" onClick={() => setVariantSwitch("daily")} >Daily</Button>
                </div>
                {vaccineInfo.length,country.length && spreadTrendVariant}
              </div>
    
            </div>
    
            <div class="grid2">
    
              <div className="app__map">
                {/* Map */}
                <Map   
                  center={mapCenter}
                  zoom={zoom}
                  casesType={casesType}
                  mapCountries={mapCountries}
                />
              </div>
    
              {/* <Overview/> */}
              <div className="app__overview">
                <h1 style={{color: "#6c757d", display: "flex", justifyContent: "center"}}>Overview</h1>
                <Overview 
                  country={country}
                  countryInfo={countryInfo}
                  vaccineInfo={vaccineInfo}
                  vaccineDaily={vaccineDaily}
                  vaccineTotal={vaccineTotal}
                />
              </div>
    
            </div>
          </div>  
        </div>
      )}
    </>
  );
}

export default App;
