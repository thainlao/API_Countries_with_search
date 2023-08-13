import React, { useEffect, useState } from "react";
import Country from "./Country";

const Mainbody = () => {
    const [countries, setCountries] = useState([]);
    const [searchText, setSearchText] = useState('');

    const searchInput = (event) => {
        setSearchText(event.target.value)
    }

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
            setCountries(data)
        })
        .catch((error) => {
            console.log('error fetching', error)
        })
    }, [])

    return (
        <div className="mainbody">
            <div className="title">
                <p className="title_text">World Countries</p>
                <input 
                    style={{marginBottom: '45px'}}
                    className="input" 
                    placeholder="FIND YOUR COUNTRY"
                    value={searchText}
                    onChange={searchInput}
                />
            </div>
            <div className="country_contaier">
            {filteredCountries.map((country) => {
                return (
                    <Country 
                    key={country.name.common}
                    name={country.name.common}
                    flag={country.flags.png}
                    region={country.region}
                    />
            )    
            })}
            </div>
        </div>
    )
}

export default Mainbody;