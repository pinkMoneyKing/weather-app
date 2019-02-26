import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';


export default class ForcastDisplay extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		const {forecast} = this.props;
		const weatherForcast = [];
		forecast.list.forEach((item) => {
			weatherForcast.push(<WeatherDisplay weather={item} />);
		});

		console.log(forecast);
		return (
			<div>
				<div>Forecast Display</div>
				{weatherForcast}
			</div>
		);
	}
};
