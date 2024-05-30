import { useState,useEffect } from 'react'
import './App.css'
import services from './services/services.jsx'


function App() {
  const [countries, setCountries] = useState([])
  const [newcountries, setNewCountries] = useState('')
  const [selectedcountry,setNewSelectedCountries]= useState(null)
  
 useEffect(()=> {services.getdb().then(response=>{
    setCountries(response.data)
  })
  
},[])

const handleCountrysearch=(event)=>{
  console.log(event.target.value)
  
  setNewCountries(event.target.value)
  
  
  
}



const handleSelectedcountry=(x)=>setNewSelectedCountries(x)

const handlegoback =()=>setNewSelectedCountries(null)

const Countrydisplay=()=>{
  const countrysearch = countries.filter((countries)=>countries.name.common.toLowerCase().includes(newcountries.toLowerCase()))
  
  if (selectedcountry){
    const countrylanguages=Object.values(selectedcountry.languages)
  
    return(
    <div>
      
      <button onClick={()=>handlegoback}>goback</button>
    <h2>{selectedcountry.name.common}</h2>
    <p>Capital : {selectedcountry.capital}</p>
    <p>Area : {selectedcountry.area}</p>
    <h3>Languages:</h3>
    {countrylanguages.map((x)=><li>{x}</li>)}
    <h3>Flag:</h3>
    <a href={selectedcountry.flags.png}>
        <img src={selectedcountry.flags.png}></img>
    </a>
    </div> 
    
  
      )
   
  }
 
  
  if (countrysearch.length<10){
    
    const countriesnames=countrysearch.map((x)=><div>
    <li>{x.name.common}<button onClick={()=>handleSelectedcountry(x)}> Show all</button></li>
    
  </div>)
  
  return(
    countriesnames
  )
}
else{ 
  return(
    <div>Too many matches,be more specific </div>
)
}
}

  return (
    <>
      <div>
        <h1>Search for Country</h1>
        <form>
        <div>
        Country: <input value={newcountries} onChange={handleCountrysearch}></input>
        </div>
          
        <Countrydisplay countries={countries} newcountries={newcountries}/>
        
        </form>
       </div>
    </>
  )
}

export default App
