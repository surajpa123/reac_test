import React, { useState } from 'react'
import axios from "axios"
import style from "../Components/home.css"
import {Link} from "react-router-dom"
export default function Home() {
    const [data,setData] = useState()
   const [s,sets] = useState(false)
   const [count,setCount] = useState(0)
React.useEffect(()=>{
    getData()
    removeData()
},[count])

  const SortPopu= ()=>{
   let all_d =   data
   if(s == true){
    all_d.sort(function(a,b){
        return Number(a.population) - Number(b.population)
    })
    sets(false)
    setCount(1)
   }
   else if(s == false){
    all_d.sort(function(a,b){
        return Number(b.population) - Number(a.population)
    })
    sets(true)
   }
      setData(all_d)
  }
  const sortCountry = ()=>{
    let all_d =   data
    if(s == true){
     all_d.sort(function(a,b){
         return Number(a.id)  - Number(b.id)
     })
     sets(false)
     
    }
    else if(s == false){
     all_d.sort(function(a,b){
         return Number(b.id)  - Number(a.id)
     })
     sets(true)
    }
       setData(all_d)

  }
  

    const getData = ()=>{
        axios.get("http://localhost:8080/cities").then(function(res){
            setData(res.data)
        })
    }
console.log(data)
    const removeData = (id) => {
        axios.delete(`${"http://localhost:8080/cities"}/${id}`).then(res => {
            var del = cities.filter(cities => id !== cities.id)
            setData(del)
            isdel(true)
        })
        setCount(1)
        getData()
        console.log(data)
    }

  return (

    <div className='maindiv'> 
    <div>
        <Link to={"/add-city"}>Add City</Link>
      <br />
        <Link to={"/add-country"}>Add Country</Link>
    </div>
  <div>
   <table>
       <thead>
           <tr>
               <th>id</th>
               <th>Country</th>
               <th>City</th>
               <th>Population</th>
               <th>Edit</th>
               <th>Delete</th>
           </tr>
       </thead>
       <tbody>
           {
               data?.map((e)=> {
                   return (
                       <tr>
                       <td>{e.id}</td>
                       <td>{e.country}</td>
                       <td>{e.city}</td>
                       <td>{e.population}</td>
                       <td><button>Edit</button></td>
                       <td><button onClick={()=>removeData(e.id)}>Delete</button></td>
                       </tr>
                   )
               })
           }
       </tbody>
   </table>
 



   </div>
 <button onClick={sortCountry} >Filter By Country</button>
 <button onClick={SortPopu}>Sort by Population</button>
    </div>




 
  )
}
