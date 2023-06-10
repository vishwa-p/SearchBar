import React from 'react'
import './SearchResult.css';
export const SearchResults = ({result}) => {
  return (
    <div className='searchresult' onClick={(e)=>alert(`you clicked on ${result.name}`)}>
      {result.name}
    </div>
  )
}

export default SearchResults
