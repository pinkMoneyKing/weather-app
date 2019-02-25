import React, { Component } from 'react';
import {SearchCurrentWeatherByZipCode} from '../api/WeatherApiCalls';


class WeatherDisplay extends Component {
	constructor(props){
		super(props)
		this.state = {};
	}
	render(){
		const {
			weather,
			} = this.props;
		const cityName = weather.name;
		return(
		<div>
				<div>Current City {cityName}</div>
				<div>Weather : {weather.weather[0].description}</div>
		</div>
		)
	}
}

export default WeatherDisplay;
