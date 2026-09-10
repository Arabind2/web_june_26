import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import Header from './components/Header'
import CountriesList from './components/CountriesList'
import './App.css'
const App = () => {
  const [query,setQuery]=useState("")
  return (
    <>
    <Header/>
      <main>
        <div className='search-filter-container'>
        <SearchBar setQuery={setQuery}/>
        <SelectMenu/>
        </div>
        <CountriesList query={query}/>
      </main>
    
    </>
  )
}

export default App

//diffing algorithm
//reConcilation
//key prop

//lifting the state up- when two diffrent child component depend on the same state,
// so instead of declaring the state twice in both the components we declare the state inside the parent component. 
// That is called as Lifting the state up.