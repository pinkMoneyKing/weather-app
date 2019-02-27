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

const fullDayStyles = {
	borderStyle: 'solid',
	borderWidth: '2px',
	borderColor: 'pink'

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
