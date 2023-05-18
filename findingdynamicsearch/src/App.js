
import { useState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { SearchResultsLoist } from './components/SearchResultsLoist';


function App() 
{

  const [results,setResults] = useState([]);


  return (
    <div className="App">
        <div>
          <div className='search-bar-container'>
            <SearchBar setResults={setResults}/>
            <SearchResultsLoist results={results}/>
          </div>
        </div>
    </div>
  );
}

export default App;
