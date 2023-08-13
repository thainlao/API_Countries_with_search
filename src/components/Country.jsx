import React from "react";

const Country = ({ name, flag, region}) => {
    return (
        <div className="country">
        <img src={flag} alt={`Flag of ${name}`} className="country_flag" />
        <p className="country_title">{name}</p>
        <p className="country_title_official">{region}</p>
        </div>
    )
}

export default Country;