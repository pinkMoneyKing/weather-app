import React, { Component } from 'react';
import {LoadWeatherData} from './api/WeatherApiCalls';
import SearchBar						from './components/SearchBar';
import WeatherDisplay						from './components/WeatherDisplay';
import ForcastDisplay						from './components/ForcastDisplay';

class App extends Component {
  render() {
		const {
			weather,
			forecast,
			currentWeatherLoaded,
			forecastLoaded,
			zipCode,
			searchZipCode,
			changeZipCode,
			} = this.props;
		console.log('forecast', forecast);
		return (
			<div>
				<SearchBar 
					weather={weather}
					zipCode={zipCode}
					searchZipCode={searchZipCode}
					changeZipCode={changeZipCode}
				/>
				<div>Current Weather For : <strong>{weather.name}</strong></div>
				{currentWeatherLoaded ? 
				<WeatherDisplay
					weather={weather} />
					: <div>Loading</div>
				}
				{forecastLoaded ? 
				<ForcastDisplay
					forecast={forecast} />
					: <div>Loading</div>
				}
			</div>
		);
	}
}

export default LoadWeatherData(App);
