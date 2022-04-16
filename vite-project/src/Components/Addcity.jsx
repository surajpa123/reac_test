import React, { useState } from 'react'
import axios from "axios"
export default function Addcity() {
  
    const [city,setCity] = useState()
    const [population,setPopulation] = useState()
    const [coun,setCoun] = useState()

    const data = {
      city:city,
      population:population,
      country:coun
    }

    
  const handelsub = ()=>{
    axios.post("http://localhost:8080/cities", data).then(function(res){
        console.log("Done")
    })
  }


  return (
    <div>Addcity
  <input type="text" placeholder='City name' onChange={(e)=>{setCity(e.target.value)}}/>
  <input type="text" placeholder='Population' onChange={(e)=>{setPopulation(e.target.value)}}/>
  <input type="text" placeholder='Country' onChange={(e)=>{setCoun(e.target.value)}}/>
  <button onClick={handelsub}>Submit</button>
    </div>
  )
}
