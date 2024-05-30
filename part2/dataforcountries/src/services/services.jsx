import axios from 'axios'
const baseURL='https://studies.cs.helsinki.fi/restcountries/api/all'

const getdb=()=>{
    console.log(`GET effect`)
    return(
    axios.get(baseURL)
    )
}
export default {getdb} 