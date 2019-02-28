import React, { Component }			from 'react';
import TopLevelComponent				from './TopLevelComponent';
import BottomLevelComponent			from './BottomLevelComponent';
import HourForecastDisplay			from './HourForecastDisplay';

const MainComponentStyles = {
	display: 'flex',
	flexDirection: 'column',
	marginTop: '2em',
	marginBottom: '1em',
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '60%',
	height: '100%',

	borderStyle: 'solid',
	borderWidth: '.9px',
	borderColor: 'rgb(223, 225, 229)',
	borderRadius: '8px',
}


class MainComponent extends Component {
	constructor(props){
		super(props)
		this.state = {
			dateArray: [],
			dateForecastObject: {},
			selectedDateObject: '',
			showingHourlyForcast: false
		};
		this.toggleFullDay = this.toggleFullDay.bind(this);
		this.selectDate = this.selectDate.bind(this);
		this.pushObjectToDateArray = this.pushObjectToDateArray.bind(this);
	}

	selectDate(selectedDate){
		console.log(selectedDate);
		/*
		 * TODO:
		 * showingHourlyForcast should: 
		 * stay open if new date is selected
		 * close if the same date was selected
		 *
		*/
		for(let key in this.state.dateForecastObject){
			if(key === selectedDate){
				this.setState({
					selectedDateObject: this.state.dateForecastObject[key],
					showingHourlyForcast: true,
		});
			}
		}
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
		this.setState({
			showFullDayForecast: !this.state.showFullDayForecast
		});
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
	}

	render() {
		const {
			weather,
			forecast,
			currentWeatherLoaded,
			forecastLoaded,
			zipCode,
			searchByZipCode,
			changeZipCode,
			} = this.props;
		console.log(this.state.dateForecastObject);
		return (
			<div>
				<div style={MainComponentStyles}>
					<TopLevelComponent
						weather={weather}
						zipCode={zipCode}
						changeZipCode={changeZipCode}
						searchByZipCode={searchByZipCode}/>

					<BottomLevelComponent
						selectDate={this.selectDate}
						forecast={forecast}/>

				</div>
				{
					this.state.showingHourlyForcast 
					? <HourForecastDisplay 
							selectedDateObject={this.state.selectedDateObject}/>
					: <div></div>
				}
			</div>
		);
	}
}


export default MainComponent;
