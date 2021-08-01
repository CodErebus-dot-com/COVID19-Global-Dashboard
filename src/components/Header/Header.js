import React from 'react'
import CountrySelect from './CountrySelect/CountrySelect'


const Header = ({countries, country, onCountryChange, name, data, casesType}) => {
    
    return (
        <>
            <CountrySelect 
                countries={countries} 
                country={country} 
                onCountryChange={onCountryChange} 
                name={name}
                data={data}
                casesType={casesType}
            />
        </>
    )
}

export default Header
