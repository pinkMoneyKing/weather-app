import React, { Component } from 'react';
import {
	CurrentWeatherByZipCode,
	CurrentForecastByZipCode
	} from './ApiCalls';

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
			this.setCurrentWeatherData = this.setCurrentWeatherData.bind(this);
			this.setForecastData = this.setForecastData.bind(this);
			this.setError = this.setError.bind(this);
		}

		setError(error){
			this.setState({error});
		};

		setCurrentWeatherData(weather){
			this.setState({
				weather,
				currentWeatherLoaded: true
			});
		}

		setForecastData(forecast){
			this.setState({
				forecast,
				forecastLoaded: true
			});
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
			CurrentWeatherByZipCode(
				current_location, 
				this.setCurrentWeatherData, 
				this.callbackError)

			// Forcast
			CurrentForecastByZipCode(
				current_location,
				this.setForecastData,
				this.callbackError
			);
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
					searchByZipCode={this.searchByZipCode}
					zipCode={this.state.selectedCityZipCode}
					weather={this.state.weather} 
					forecast={this.state.forecast}
					{...this.props}/>
			)
		}
	}
}
