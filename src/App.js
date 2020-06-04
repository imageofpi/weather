import React, {  Component } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

class App extends Component{
    state={
        query:'',
        weather:{},
    }    
    async search(e){
        this.setState({
            query:e.target.value
        })
            const data = await fetchWeather(this.state.query);
            this.setState({
                weather:data,
            })
    }
    render(){
        const {query,weather}=this.state
    return (
        <div className="main-container">
            <input type="text" className="search" placeholder="Search..." value={query} onChange={(e)=>{
                this.search(e);
            }}/>
            {weather.main ?(
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            ):(
                <h1 style={{color:'white'}}>Search for more</h1>
            )}
        </div>
    )}
}

export default App;