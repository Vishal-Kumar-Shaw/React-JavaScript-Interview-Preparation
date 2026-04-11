import './App.css'
import searchIcon from './assets/search.png';
import { useState } from 'react';
import { dummyData } from './Data/dummyData';
import SearchItem from './components/SearchItem';

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filteredData = dummyData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setData(filteredData);
    console.log(filteredData);
  }
  const handleItemClick = (item) => {
    console.log("clicked")
    setQuery(item.name);
    setData([]);
  }
  
  const handleKeyDown = (e) =>{
    if(e.key === "ArrowDown"){
      setActiveIndex(prev => {
        const newIndex = prev < data.length-1 ? prev+1 : prev;
        if(data[newIndex]){
          setQuery(data[newIndex].name);
        }

        return newIndex;
      })
    }
    else if(e.key === "ArrowUp"){
      setActiveIndex(prev =>{
        const newIndex = prev > 0 ? prev - 1 : prev;
        if(data[newIndex]){
          setQuery(data[newIndex].name)
        }
        return newIndex;
      })
    }
    else if(e.key === "Enter"){
      if(activeIndex>=0){
        handleItemClick(data[activeIndex]);
      }
    }

  }

  return (
    <div className='main'>
      <div className='input-div'>
        <input type="text" value={query} onChange={handleChange}   onKeyDown={handleKeyDown}/>
        <img src={searchIcon} alt="img" />
      </div>
      {data.length > 0 && query.length > 0 && <div className='results'>
        {data.map((item, index) => (
          <SearchItem
            key={item.id}
            value={item}
            onClick={handleItemClick}
            isActive={activeIndex == index}
          />
        ))}
      </div>}
    </div>
  )
}

export default App
