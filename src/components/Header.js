import React from 'react'
import CountrySelect from './CountrySelect'


const Header = ({countries, country, onCountryChange, name, data, casesType}) => {
    
    return (
        <>
            {/* <h1>COVID-19 Tracker</h1> */}
            {/* <FormControl className="app__dropdown"> */}
            <CountrySelect 
                countries={countries} 
                country={country} 
                onCountryChange={onCountryChange} 
                name={name}
                data={data}
                casesType={casesType}
            />
            
            
            
            {/* </FormControl> */}
        </>
    )
}

export default Header
