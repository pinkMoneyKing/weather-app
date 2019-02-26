import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';
import ForcastDisplay from './ForcastDisplay';


class WeatherForecastWrapper extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		const {
			forcast,
			weather,
		} = this.props;
		return (
			<WeatherDisplay weather={weather} />
		);
	}
}
