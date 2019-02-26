import React, { Component }			from 'react';
import {LoadWeatherData}				from './api/WeatherWrapperComponent';
import SearchBar								from './components/SearchBar';
import WeatherDisplay						from './components/WeatherDisplay';
import ForcastDisplay						from './components/ForcastDisplay';

const AppStyles = {
	marginTop: '2em',
	marginBottom: '1em',
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '90%',
}

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
			<div style={AppStyles}>
				<SearchBar 
					weather={weather}
					zipCode={zipCode}
					changeZipCode={changeZipCode}
					searchByZipCode={searchByZipCode}
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
