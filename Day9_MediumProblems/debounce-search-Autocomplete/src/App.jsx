import './App.css'
import searchIcon from './assets/search.png';
import { useState } from 'react';
import { dummyData } from './Data/dummyData';
import SearchItem from './components/SearchItem';

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e)=>{
    const value = e.target.value;
    setQuery(value);
    const filteredData = dummyData.filter((item)=>item.toLowerCase().includes(value));
    setData(filteredData);
    console.log(data);
  }

  return (
    <div className='main'>
      <div className='input-div'>
        <input type="text" value={query} onChange={handleChange}/>
        <img src={searchIcon} alt="img" />
      </div>
      {data.length > 0 && query.length>0 && <div className='results'>
        {data.map((item, index)=>(
         <SearchItem key={index} value={item}/>
        ))}
      </div>}
    </div>
  )
}

export default App
