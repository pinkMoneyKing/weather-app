import React, { Component } from 'react';


const weatherStyles = {
	display: 'flex',
	flexDirection: 'column',
	borderColor: 'black',
	borderWidth: '2px',
	borderStyle: 'solid',
	width: '10em',
	height: '10em',
	margin: '2em',
	alignItems: 'center',
};

const imgStyles = {
};


class WeatherDisplay extends Component {
	constructor(props){
		super(props)
		this.state = {};
	}
	render(){
		const {
			weather,
			toggleFullDay,
			} = this.props;
		const weatherIcon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
		
		return(
			<div onClick={toggleFullDay}>
				<div style={weatherStyles}>
			<div>{weather.dt_txt}</div>
				<img 
					src={weatherIcon} 
					width='60px'
					alt={weather.weather[0].main}/>
				<div>{weather.weather[0].description}</div>
				<div>{weather.main.temp} &#8457;</div>
			</div>
		</div>
		)
	}
}

export default WeatherDisplay;
