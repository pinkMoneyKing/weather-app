import React, { PureComponent } from 'react';
import '../scss/WeatherDisplay.scss';


class WeatherDisplay extends PureComponent {
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
				className='weatherDisplayWrapper'>
				<div className='dateImageTempStyles'>
						<div
							className='displayName'>
								{weather.name}
						</div>
						<div 
							className='displayDate'>
								{dateTimeArray[0]} {dateTimeArray[4]} {dateTimeArray[5]}
						</div>
						<div 
							className='displayDescripition'>
							{weather.weather[0].description}
						</div>
						<div className='displayTemp'>{weather.main.temp} &#8457;</div>
						<img 
							src={weatherIcon} 
							height='60px'
							width='50px'
							alt={weather.weather[0].main}/>
						</div>
					</div>
			)
		}
}

export default WeatherDisplay;

//[data-type="light-rain"] {
//    background-image: url(https://bluestemamphitheater.org/wp-content/uploads/blog-rain-or-shine.jpg);
//        background-size: cover;
//data-type={weather.weather[0].description}>
