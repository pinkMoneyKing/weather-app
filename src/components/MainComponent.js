import React, { PureComponent }	from 'react';
import TopLevelComponent				from './TopLevelComponent';
import BottomLevelComponent			from './BottomLevelComponent';
import HourForecastDisplay			from './HourForecastDisplay';
import '../scss/MainComponent.scss';


class MainComponent extends PureComponent {
	constructor(props){
		super(props)
		this.state = {
			dateForecastObject: {},
			selectedDateObject: '',
			showingHourlyForcast: false
		};
		this.toggleFullDay = this.toggleFullDay.bind(this);
		this.selectDate = this.selectDate.bind(this);
	}

	selectDate(selectedDate){
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
		// Create an organized object of hourly forecasts
		forecast.list.map((value, index) => {
			const time_array = value.dt_txt.split(' ');
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
			zipCode,
			searchByZipCode,
			changeZipCode,
			} = this.props;
		return (
			<div>
				<div className="TopBottomComponent">
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
