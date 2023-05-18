import React from 'react'
import "../components/SearchResultsList.css";

export const SearchResultsLoist = ({results}) => {
  return (
    <div className='result-list'>
        {
            results.map((result,id) => {
                return <div key={id} id='answers'>
                    {result.name}
                </div>
            })}
    </div>
  );
}
