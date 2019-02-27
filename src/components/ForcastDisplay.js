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
			dateArray: [],
			dateForecastObject: {},
			};
		this.toggleFullDay = this.toggleFullDay.bind(this);
		// this.pushObjectToDateArray = pushObjectToDateArray.bind(this);
	}

	pushObjectToDateArray(object){
		this.setState(state => ({
			dateArray: [...state.dateArray, object]
		}));
		// const newDateArray = this.state.dateArray.concat(object)
		// this.setState({dateArray: [newDateArray]});
	}
	addDatesToForecastObject(datesObject){
		this.setState({
			dateForecastObject: {
				...this.state.dateForecastObject,
				...datesObject
			}
		})
	}

	toggleFullDay(){
		this.setState({showFullDayForecast: !this.state.showFullDayForecast});
	}

	componentDidMount(){
		const {forecast} = this.props;
		let date_object = {};
		forecast.list.map((value, index) => {
			const time_array = value.dt_txt.split(' ');
			// this.pushObjectToDateArray(time_array);
			date_object[time_array[0]] 
			? date_object[time_array[0]].push(value)
			: date_object[time_array[0]] = [value]
			this.addDatesToForecastObject(date_object);
			});
		// });
	// object_entries.map((object_array, index) => {
	// 	if(object_array[0] === time_array[0]){
	// 		return object_array[1].map((weather_object, weather_index) => {
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
	console.log(this.state.dateForecastObject);
	return (
		<div 
			style={forcastWrapperStyles}>
			<div>Forecast Display</div>
			{forecast.list.map((value, index) => {
				const time_array = value.dt_txt.split(' ');
				if(time_array[1] === "12:00:00"){
					return (
						<div 
							key={index}>
							<WeatherDisplay 
								toggleFullDay={this.toggleFullDay}
								weather={value}/>
						</div>
						)
					}
				})}
			</div>
		)
	}
}
