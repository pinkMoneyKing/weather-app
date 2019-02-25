import React, { Component } from 'react';
import {SearchCurrentWeatherByZipCode} from './api/WeatherApiCalls';
import SearchBar						from './components/SearchBar';
import WeatherDisplay						from './components/WeatherDisplay';

class App extends Component {
  render() {
		const {
			weather,
			cityLoaded,
			zipCode,
			searchZipCode,
			changeZipCode,
			} = this.props;
		return (
			<div>
				<SearchBar 
					weather={weather}
					zipCode={zipCode}
					searchZipCode={searchZipCode}
					changeZipCode={changeZipCode}
				/>
				{cityLoaded ? 
				<WeatherDisplay
					weather={weather} />
					: <div>Loading</div>
				}
			</div>
		);
	}
}

export default SearchCurrentWeatherByZipCode(App);
