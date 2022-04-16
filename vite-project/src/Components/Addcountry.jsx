 import React, { useState } from 'react'
 import axios from "axios"
 export default function Addcountry() {
 const [country,setCountr] = useState()

 const data = {
     country:country,
 }

       
  const handelsub = ()=>{
    axios.post("http://localhost:8080/country", data).then(function(res){
        console.log("Done")
    })
  }
   return (
     <div>Addcountry
 <input type="text"  placeholder='Country' onChange={(e)=>{setCountr(e.target.value)}}/>
 <button onClick={handelsub}>Add Country</button>


     </div>
   )
 }
 