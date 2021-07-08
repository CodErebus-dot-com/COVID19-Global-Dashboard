import React from 'react';
import Report from './Report/Report'
import DoughnutChart from './DoughnutChart/DoughnutChart';

const Overview = ({countryInfo, country, vaccineInfo, vaccineDaily, vaccineTotal}) => {
  
  return(
    <>
      <Report 
        countryInfo = {countryInfo} 
        country={country} 
        vaccineInfo={vaccineInfo}
        vaccineDaily={vaccineDaily}
        vaccineTotal={vaccineTotal}
      />
      <DoughnutChart countryInfo={countryInfo}/>
    </>
  )
}


export default Overview
















































// const Overview = ({country, countryInfo, countries, mapCountries}) => {
//   //   country ---->>> Gives the current selected country option (including worldwide)
//   //   countryInfo --->>> Details of current selected country option (including worldwide)
//   //   countries --->>> Array of Objects with all country names and values
//   //   mapCountries --->>> Array of Objects with details of all countries (including worldwide)

//   //   console.log(country);
//   //   console.log("No 1 Countries: -------->>>>>",countries);
//   //   console.log("-----------------------------------");
//   //   console.log("No 2 Country Info: ---------->>>>>>>",countryInfo);
//   //   console.log("-----------------------------------");
//   //   console.log("No 3 Map Countries: ---------->>>>>>>",mapCountries);

//     return (
//         <>
//           <h1>Overview: {country}</h1>
//           <div className="stats">
//             <div>{countryInfo.active}</div>
//             <div>{countryInfo.cases}</div>
//             <div>{countryInfo.recovered}</div>
//             <div>{countryInfo.deaths}</div>
//             <div>{countryInfo.tests}</div>
//           </div>
//         </>
//     )
// }

// export default Overview
