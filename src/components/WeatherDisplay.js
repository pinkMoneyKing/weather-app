import React, { Component } from 'react';


const weatherStyles = {
	display: 'flex',
	flexDirection: 'column',
	// borderColor: 'black',
	// borderWidth: '2px',
	// borderStyle: 'solid',
	width: '10em',
	// height: '10em',
	// margin: '2em',
	
	alignItems: 'center',
};

const fontStyles = {
	color: '#878787',
	fontFamily: 'Roboto, arial, sans-serif',
}

const cityNameStyles = {
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
		const date = new Date(weather.dt* 1000);
		return(
			<div 
				style={weatherStyles}>
				<h1
					style={{
						...fontStyles
						}}>
					{weather.name}
				</h1>
				<h3 
					style={{...fontStyles}}>
					{date.toString()}
				</h3>
				<h3 
					style={fontStyles}>
					{weather.weather[0].description}
				</h3>
				<img 
					src={weatherIcon} 
					width='60px'
					alt={weather.weather[0].main}/>
				<div style={fontStyles}>{weather.main.temp} &#8457;</div>
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
