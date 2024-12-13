import axios from "axios"

export const getAllCountries=async()=>{
    return await axios.get('https://restcountries.com/v3.1/all?fields=name,flags')
}

export const getCountry=async(name)=>{
    return await axios.get(`https://restcountries.com/v3.1/name/${name}`)
}