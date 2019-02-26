import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';


const forcastWrapperStyles = {
	display: 'flex',
	flexWrap: 'wrap',
	width: '100%',
	// borderStyle: 'solid',
	// borderWidth: '2px',
	// borderColor: 'pink'
};

const fullDayStyles = {
	borderStyle: 'solid',
	borderWidth: '2px',
	borderColor: 'pink'

};


export default class ForcastDisplay extends Component {
	constructor(props){
		super(props);
		this.state = {
			showFullDayForecast: false,
			};
		this.toggleFullDay = this.toggleFullDay.bind(this);
		}
	toggleFullDay(){
		this.setState({showFullDayForecast: !this.state.showFullDayForecast});
	}
	render(){
		const {forecast} = this.props;
		const weatherForcast = [];
		let date_object = {};
		forecast.list.map((value, index) => {
			const time_array = value.dt_txt.split(' ');
			date_object[time_array[0]] 
				? date_object[time_array[0]].push(value)
				: date_object[time_array[0]] = [value]
		});
		const showFullDayForecast = this.state.showFullDayForecast;
		console.log(showFullDayForecast);
		return (
			<div>
				<div><strong>Forecast Display</strong></div>
				<div 
					style={forcastWrapperStyles}>
					{forecast.list.map((value, index) => {
						const time_array = value.dt_txt.split(' ');
						const object_entries = Object.entries(date_object);
						if(time_array[1] === "12:00:00"){
							return (
								<div 
									key={index}>
								<WeatherDisplay 
									toggleFullDay={this.toggleFullDay}
									weather={value}/>
								<div 
									style={{ 
										visibility: this.state.showFullDayForecast 
										? 'visible' 
									: 'hidden'}}>
								{object_entries.map((object_array, index) => {
									if(object_array[0] === time_array[0]){
										return object_array[1].map((weather_object, weather_index) => {
									return (
										<div 
											key={weather_index}>
											<WeatherDisplay 
												weather={weather_object} />
										</div>
									)
										})
									}
								})}
								</div>
							</div>
								)
						}
					})}
				</div>
			</div>
		)
	}
}
