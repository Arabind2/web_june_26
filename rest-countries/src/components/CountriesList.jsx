import { useState } from "react";
import countriesData from "../countriesData"
import CountryCard from "./CountryCard" 
export default function CountriesList({query}) {
  const [countriesData,setCountriesData]=useState([])
 const filterCountries = countriesData.filter(country => 
    country.names.common.toLowerCase().includes(query.toLowerCase()));

    fetch(
  'https://api.restcountries.com/countries/v5?response_fields=names.common,capitals,flag.url_svg,region,population&limit=100',
  { headers: { 'Authorization': 'Bearer rc_live_eb72afb5147a4f4fa2cc4a57aabd4336' } }
).then((response)=>response.json())
.then((result)=>{console.log("result is",result)
 setCountriesData(result.data.objects)
}
)

console.log(countriesData);

  return (
    <>
  
    <div className="countries-container">

      {
      filterCountries != 0 ?
        (filterCountries.map((country,idx)=>(
          <CountryCard 
          key={idx}
          flag={country.flag.url_svg || "www.google.com"}
          name={country.names.common}
          population={country.population}
          capital={country.capitals}
          region={country.region}
          />
        )))
        :
        <p >Unable to find country with name :- {query}</p>
        
      }

    </div>
    </>
  )
}

