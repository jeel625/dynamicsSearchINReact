import React, { useState } from 'react'
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'

export const SearchBar = ({setResults}) => {

  const [input,setInput] = useState("");
  const fetchData=(value)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response)=>Response.json())
    .then((json) => {
      const results= json.filter((user) => {
        return ( value && user && user.name && user.name.toLowerCase().includes(value) )
      });
      setResults(results);
    });
  };

  const hnadleChange =(value) =>{
    setInput(value)
    fetchData(value)
  }
  return (
    <div className='input-wrapper'>
        <FaSearch id="search-icon" />
        <input type="text" placeholder='Type To Search.....' value={input} onChange={(e)=>hnadleChange(e.target.value)}></input>
    </div>
  )
}
