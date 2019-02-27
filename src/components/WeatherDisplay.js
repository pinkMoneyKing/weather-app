import React, { Component } from 'react';


const weatherStyles = {
	display: 'flex',
	flexDirection: 'column',
	// borderColor: 'black',
	// borderWidth: '2px',
	// borderStyle: 'solid',
	width: '50em',
	// height: '10em',
	margin: '2em',
	
	alignItems: 'flex-start',
};

const fontStyles = {
	color: '#878787',
	fontFamily: 'Roboto, arial, sans-serif',
}

const nameStyles = {
	color: '#878787',
	fontFamily: 'Roboto, arial, sans-serif',
	fontSize: '40px',
	fontWeight: 'bold',
}

const dateStyles = {
	color: '#878787',
	fontFamily: 'Roboto, arial, sans-serif',
	fontSize: '20px',
	borderBottomColor: 'black',
	borderBottomWidth: '.9px',
	borderBottomStyle: 'solid',
}

const descripitionStyles = {
	color: '#878787',
	fontFamily: 'Roboto, arial, sans-serif',
	fontSize: '20px',
	fontWeight: 'bold',
}

const cityNameStyles = {
};

const cityDateWeatherWrapperStyles = {
	// display: 'flex',
	// flexDirection: 'column',
};


const dateImageTempStyles = {
	display: 'flex',
	// borderColor: 'black',
	// borderWidth: '2px',
	// borderStyle: 'solid',
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
		const dateTime = new Date(weather.dt* 1000);
		const dateTimeArray = dateTime.toString().split(' ');
		console.log(dateTimeArray);
		return(
			<div 
				style={weatherStyles}>
				<div style={dateImageTempStyles}>
					<div style={cityDateWeatherWrapperStyles}>
						<div
							style={nameStyles}>
								{weather.name}
						</div>
						<div 
							style={dateStyles}>
								{dateTimeArray[0]} {dateTimeArray[4]} {dateTimeArray[5]}
						</div>
						<div 
							style={descripitionStyles}>
							{weather.weather[0].description}
						</div>
						<div style={fontStyles}>{weather.main.temp} &#8457;</div>
						<img 
							src={weatherIcon} 
							height='60px'
							width='50px'
							alt={weather.weather[0].main}/>
					</div>
						</div>
						{/*<div onClick={toggleFullDay}>
							<div style={weatherStyles}>
								<div>{weather.dt_txt}</div>
								<div>{weather.weather[0].description}</div>
							</div>
						</div>
						*/}
					</div>
			)
		}
}

export default WeatherDisplay;

//[data-type="light-rain"] {
//    background-image: url(https://bluestemamphitheater.org/wp-content/uploads/blog-rain-or-shine.jpg);
//        background-size: cover;
//data-type={weather.weather[0].description}>
