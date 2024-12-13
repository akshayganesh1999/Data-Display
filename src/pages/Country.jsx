import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getCountry } from '../allApi';

function Country() {
  const { name } = useParams()
  const [country,setCountry]=useState({})

  useEffect(() => {
    getData()
  }, [])

const getData=async()=>{
  const result=await getCountry(name)
  if(result.status==200){
    console.log(result.data[0])
    setCountry(result.data[0])
  }
}

return (
  <>
  <div className='container p-5'>
    <div className='card'>
      <img src={country?.flags?.png} alt="" />
    </div>
    <h1>{country?.name?.common}</h1>
    <h4>Capital : {country?.capital}</h4>
    <h4>Continent : {country?.continents}</h4>
    <a href={country?.maps?.googleMaps} target='_blank'>Map</a>
  </div>
  </>
)
}

export default Country
