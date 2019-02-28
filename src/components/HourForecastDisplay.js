import React, { PureComponent }			from 'react';
import '../scss/HourForecastDisplay.scss'


export default class HourForecastDisplay extends PureComponent {
	constructor(props){
		super(props)
		this.state = {};
	}

	render(){
		const {
			selectedDateObject
		} = this.props;
		return (
		<div className='hourPageWrapper'>
				{selectedDateObject.map((date, index) => {
					const time = date.dt_txt.split(' ')[1];
					const dateTime = new Date(date.dt * 1000);
					const dateTimeArray = dateTime.toString().split(' ');
					const weatherIcon = `http://openweathermap.org/img/w/${date.weather[0].icon}.png`;
					return(
						<div key={index}>
							<div className='hourForecastTime'>{time}</div>
							<div className='hourForecastBox'>
								<div 
									className='hourForecastDescription'>
									{date.weather[0].description}
								</div>
								<div className='hourForecastTemp'>{date.main.temp} &#8457;</div>
								<img 
									src={weatherIcon} 
									height='60px'
									width='50px'
									alt={date.weather[0].main}/>
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}
