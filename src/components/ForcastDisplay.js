import React, { PureComponent } from 'react';
import '../scss/ForecastDisplay.scss';


export default class ForecastDisplay extends PureComponent {
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
			className='pageWrapper'>
			<div className='title'>
				5 Day Forecast
			</div>
			<div className='forecastWrapper'>
				{forecast.list.map((value, index) => {
					const dateTime = new Date(value.dt* 1000);
					const dateTimeArray = dateTime.toString().split(' ');
					const time_array = value.dt_txt.split(' ');
					const weatherIcon = `http://openweathermap.org/img/w/${value.weather[0].icon}.png`;
					if(time_array[1] === "12:00:00"){
						return (
							<div 
								onClick={() => {selectDate(time_array[0])}}
								className='forecastBox'
								key={index}>
								<div 
									className='date'>
									{dateTimeArray[0]} 
								</div>
								<div 
									className='descripition'>
									{value.weather[0].description}
								</div>
								<div className='temp'>{value.main.temp} &#8457;</div>
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
