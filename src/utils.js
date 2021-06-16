import React from "react";
import { Circle, Popup } from "react-leaflet";
import CountUp from "react-countup"
import {v4 as uuidv4} from 'uuid'

const sortData = (data) => {
    const sortedData = [...data]
    return sortedData.sort((a,b) => b.cases - a.cases )
}



const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    // rgb: "rgb(204,16,52)",
    // half_op: "rgba(204,16,52,0.5)",
    mulitiplier: 1000,
  },
  active: {
    hex: "#3457D5",
    // rgb: "rgb(125,215,29)",
    // half_op: "rgba(125,215,29,0.5)",
    mulitiplier: 1000,
  },
  recovered: {
    hex: "#7DD71D",
    // rgb: "rgb(125,215,29)",
    // half_op: "rgba(125,215,29,0.5)",
    mulitiplier: 1000,
  },

  deaths: {
    hex: "#C0C0C0",
    // rgb: "rgb(251,68,67)",
    // half_op: "rgba(251,68,67,0.5)",
    mulitiplier: 5000,
  },
};

const showDataOnMap = (data, casesType="cases") => 
  data.map(country => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={{
        color: casesTypeColors[casesType].hex,
        fillColor: casesTypeColors[casesType].hex,
      }}
      radius={
        Math.sqrt(country[casesType] / 10) *
        casesTypeColors[casesType].mulitiplier
      }
      key={uuidv4()}
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            <span className="total">
              <CountUp
                start={0}
                end={country.cases}
                duration={2.5}
                separator=","
              /> 
            </span>
            <span className="total__text"> total cases</span> 
          </div>
          <div className="info-active">
            <span className="active">
              <CountUp
                start={0}
                end={country.active}
                duration={2.5}
                separator=","
              />
            </span>
            <span className="active__text"> active</span>
            <br />
            <span className="active__today">&nbsp; +
              <CountUp
                start={0}
                end={country.todayCases}
                duration={2.5}
                separator=","
              /> 
            </span>
          </div>
          <div className="info-recovered">
            <span className="recovered">
              <CountUp
                start={0}
                end={country.recovered}
                duration={2.5}
                separator=","
              /> 
            </span>
            <span className="total__text"> recovered</span>
            <br />
            <span className="recovered__today">&nbsp; +
              <CountUp
                start={0}
                end={country.todayRecovered}
                duration={2.5}
                separator=","
              />
            </span>
          </div>
          <div className="info-deaths">
            <span className="deaths">
              <CountUp
                start={0}
                end={country.deaths}
                duration={2.5}
                separator=","
              />  
            </span>
            <span className="deaths__text"> deceased</span>
            <br />
            <span className="deaths__today">&nbsp; +
              <CountUp
                start={0}
                end={country.todayDeaths}
                duration={2.5}
                separator=","
              />
            </span>
            {/* (since 20 hrs ago) */}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

export {sortData, showDataOnMap}