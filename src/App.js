import React, { useState } from "react";
import './App.css';

const api={
  key:'d692d2d4bb4845b2726d88b1ef69b9c8',
  base:'https://openweathermap.org/'
};
function App()
{
const [Search,setSearch]=useState("");
const [weather,setWeather]=useState({});
console.log(process.env.REACT_APP_KEY);
const searchPressed=()=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=${process.env.REACT_APP_KEY}&units=metric`)
  .then((res)=>res.json())
  .then((result)=>{
    setWeather(result);
    console.log(result);
  });
}
  return (
    <div>
      <div className="WholeWeather">
      <h1 id="heading">Weather App</h1>
      <input type='text'
      placeholder="Search" onChange={(e)=>setSearch(e.target.value)}></input>
      <button onClick={searchPressed}>Search</button>
      </div>
      
      {typeof weather.main!=='undefined'
      ?
      <div id="subdiv">
        <div className="property">
        <label>Name</label>
        <p>{weather.name}</p>
        </div>
<div className="property">
        <label>Temp</label>
        <p>{weather.main.temp}C</p>
        </div>
<div className="property">
        <label>Feels_Like</label>
        <p>{weather.main.feels_like}</p>
        </div>
<div className="property">
        <label>Humidity</label>
        <p>{weather.main.humidity}</p>
        </div>
<div className="property">
        <label>Pressure</label>
        <p>{weather.main.pressure}</p>
        </div>
<div className="property">
        <label>Max Temp</label>
        <p>{weather.main.temp_max}</p>
        </div>
<div className="property">
        <label>Min Temp</label>
        <p>{weather.main.temp_min}</p>
        </div>
<div className="property">
        <label>Wind Speed</label>
        <p>{weather.wind.speed}</p>
        </div>
<div className="property">
        <label>Name</label>
        <p>{weather.weather[0].main}</p>
        </div>
<div className="property">
        <label>Descriptio</label>
        <p>{weather.weather[0].description}</p>
        </div>
      </div>
      :
    ""}
      
    </div>
  )
}

export default App;