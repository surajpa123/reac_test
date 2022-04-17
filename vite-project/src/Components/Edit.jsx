
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
export default function Edit() {
const navigate = useNavigate()
    const {id} = useParams()
  console.log(id)
    const [city,setCity] = useState()
    const [population,setPopulation] = useState()
    const [coun,setCoun] = useState()

    const data = {
      city:city,
      population:population,
      country:coun
    }

  const handelsub = ()=>{
    axios.put(`http://localhost:8080/cities/${id}`, data).then(function(res){
        console.log("Done")
        alert("Updated Sucessfully",   navigate("/"))

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
