import React, { Component }			from 'react';
import {LoadWeatherData}				from './api/WeatherWrapperComponent';
import SearchBar								from './components/SearchBar';
import WeatherDisplay						from './components/WeatherDisplay';
import ForcastDisplay						from './components/ForcastDisplay';

const AppStyles = {
	display: 'flex',
	flexDirection: 'column',
	marginTop: '2em',
	marginBottom: '1em',
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '90%',
	height: '100%',

	borderStyle: 'solid',
	borderWidth: '.9px',
	borderColor: 'rgb(223, 225, 229)',
	borderTopRaidus: '8px',
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
		console.log(weather);
		return (
			<div style={AppStyles}>
				<SearchBar 
					weather={weather}
					zipCode={zipCode}
					changeZipCode={changeZipCode}
					searchByZipCode={searchByZipCode}
				/>

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
