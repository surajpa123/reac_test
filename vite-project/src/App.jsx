import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Addcity from './Components/Addcity'
import Addcountry from './Components/Addcountry'
import Home from './Components/Home'
import PageNotFOund from './Components/PageNotFOund'
function App() {


  return (
    <div className="App">
      <Routes>
<Route path='/add-city' element={<Addcity/>}/>
<Route path='/add-country' element={<Addcountry/>}/>
<Route path='/*' element={<PageNotFOund/>}></Route>
<Route path='/' element={<Home/>}></Route>
      </Routes>
     



    </div>
  )
}

export default App
