import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';


const forcastWrapperStyles = {
	display: 'flex',
	flexWrap: 'wrap',
	flexDirection: 'column',
	width: '100%',
	// borderStyle: 'solid',
	// borderWidth: '2px',
	// borderColor: 'pink'
};

const daysWrapper = {
	display: 'flex',
	width: '100%',
};

const dayStyles = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	// width: '10em',
	width: '100%',
	borderStyle: 'solid',
	borderWidth: '.9px',
	borderColor: 'rgb(223, 225, 229)',
	borderRadius: '8px',
};


const dateStyles = {
	color: '#878787',
	fontFamily: 'Roboto, arial, sans-serif',
	fontSize: '20px',
}

const descripitionStyles = {
	color: '#878787',
	fontFamily: 'Roboto, arial, sans-serif',
	fontSize: '20px',
	fontWeight: 'bold',
}

const fontStyles = {
	color: '#878787',
	fontFamily: 'Roboto, arial, sans-serif',
}

const titleStyles = {
	marginLeft: '2em',
	marginBottom: '.5em',
	color: '#878787',
	fontFamily: 'Roboto, arial, sans-serif',
	fontSize: '20px',
	fontWeight: 'bold',

};


export default class ForcastDisplay extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

render(){
	const {
		forecast,
		selectDate
		} = this.props;
	return (
		<div 
			style={forcastWrapperStyles}>
			<div style={titleStyles}>
				5 Day Forecast
			</div>
			<div style={daysWrapper}>
				{forecast.list.map((value, index) => {
					const dateTime = new Date(value.dt* 1000);
					const dateTimeArray = dateTime.toString().split(' ');
					const time_array = value.dt_txt.split(' ');
					const weatherIcon = `http://openweathermap.org/img/w/${value.weather[0].icon}.png`;
					if(time_array[1] === "12:00:00"){
						return (
							<div 
								onClick={() => {selectDate(time_array[0])}}
								style={dayStyles}
								key={index}>
								<div 
									style={dateStyles}>
									{dateTimeArray[0]} 
								</div>
								<div 
									style={descripitionStyles}>
									{value.weather[0].description}
								</div>
								<div style={fontStyles}>{value.main.temp} &#8457;</div>
								<img 
									src={weatherIcon} 
									height='60px'
									width='50px'
									alt={value.weather[0].main}/>
							</div>
							)
						}
					})}
				</div>
			</div>
		)
	}
}
// <WeatherDisplay 
	// 	toggleFullDay={this.toggleFullDay}
	// 	weather={value}/>
