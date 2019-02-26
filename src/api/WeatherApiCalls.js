import React, { Component } from 'react';

export function LoadWeatherData(WrappedComponent){
	return class extends Component {
		constructor(props){
			super(props);
			this.state = {
				currentWeatherLoaded: false,
				forecastLoaded: false,
				selectedCityZipCode: '78751',
				weather: {},
				forecasat: {},
				searchBy: 'zipCode',
				error: null,
			}
			this.changeSearchBy = this.changeSearchBy.bind(this);
			this.changeZipCode = this.changeZipCode.bind(this);
			this.searchByZipCode = this.searchByZipCode.bind(this);
			this.loadWeatherData = this.loadWeatherData.bind(this);
		}

		loadWeatherData(url){
			if(this.state.searchBy === 'zipCode'){
				this.searchByZipCode();
			}
		}
		
		changeSearchBy(searchBy){
			this.setState({searchBy});
			}

		changeZipCode(zipCode){
			this.setState({
				selectedCityZipCode: zipCode
			});
		}

		searchByZipCode(){
	 	// if country code is not specified then the search works for USA as default
			const current_location = this.state.selectedCityZipCode;
			this.setState({
				forecastLoaded: false,
				currentWeatherLoaded: false
				});
			// Current Weather
			fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${current_location}&units=imperial&APPID=2e6df9d6535a9357d1c523ac78374cf2`)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						weather: result,
						currentWeatherLoaded: true,
						});
					},
				(error) => {
					this.setState({error});
					})
			// Forcast
			fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${current_location}&units=imperial&APPID=2e6df9d6535a9357d1c523ac78374cf2`)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						forecast: result,
						forecastLoaded: true,
						});
					},
				(error) => {
					this.setState({error});
					})
		};

		componentDidMount(){
			// Default City is Austin
			this.loadWeatherData();
		};
		render(){
			return (
				<WrappedComponent 
					currentWeatherLoaded={this.state.currentWeatherLoaded}
					forecastLoaded={this.state.forecastLoaded}
					changeZipCode={this.changeZipCode}
					searchZipCode={this.searchZipCode}
					zipCode={this.state.selectedCityZipCode}
					weather={this.state.weather} 
					forecast={this.state.forecast}
					{...this.props}/>
			)
		}
	}
}
