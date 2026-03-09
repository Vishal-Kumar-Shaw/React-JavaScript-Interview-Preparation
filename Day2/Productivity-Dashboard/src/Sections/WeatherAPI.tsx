import { useEffect, useState } from "react"

const WeatherAPI = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState('');
  const [humid, setHumid] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const apikey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if(!city) return;

    const interval = setTimeout(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        .then((res) => res.json())
        .then(data => {
            setCity(data.name);
            setTemp(data.main.temp);
            setHumid(data.main.humidity);
            setIsLoading(false);
        })
        .catch(err => console.error(err));  
        
    },1000)
    return () => clearTimeout(interval); 

  },[city]);

  return (
    <div>
      <h2>Welcome to Weather API dashboard</h2>
      <input type="text" placeholder="Enter the city name" value={city} onChange={(e) => setCity(e.target.value)}/>
      { !isLoading && <h4>Temp: {temp}, City: {city}, Humid: {humid}</h4>}
    </div>
  )
}

export default WeatherAPI
