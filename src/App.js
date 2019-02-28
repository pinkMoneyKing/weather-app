import React, { Component }			from 'react';
import {LoadWeatherData}				from './api/WeatherWrapperComponent';
import TopLevelComponent				from './components/TopLevelComponent';
import BottomLevelComponent			from './components/BottomLevelComponent';
import HourForecastDisplay			from './components/HourForecastDisplay';
import MainComponent						from './components/MainComponent';


class App extends Component {

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
		return (
			<div>
					{
						currentWeatherLoaded && forecastLoaded
						? 
						<MainComponent
							forecast={forecast}
							weather={weather}
							zipCode={zipCode}
							changeZipCode={changeZipCode}
							searchByZipCode={searchByZipCode}/>

							: 
							<div>loading</div>
						}
					</div>
				);
		}
	}


export default LoadWeatherData(App);
