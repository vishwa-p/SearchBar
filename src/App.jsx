import { useState } from 'react'


import './App.css'
import SearchBar from './components/SearchBar'
import SearchResultsList from './components/SearchResultsList';

function App() {
  const [results,setResults]=useState([]);
  return (
    <>
      <div className='app'>
        <div className='search-bar-container'>
          <SearchBar setResults={setResults}></SearchBar>
          <SearchResultsList results={results}></SearchResultsList>
        </div>
      </div>
    </>
  )
}

export default App
