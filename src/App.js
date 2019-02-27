import React, { Component }			from 'react';
import {LoadWeatherData}				from './api/WeatherWrapperComponent';
import TopLevelComponent				from './components/TopLevelComponent';
import BottomLevelComponent			from './components/BottomLevelComponent';

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
	borderRadius: '8px',
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
				{
					currentWeatherLoaded 
					? 
						<TopLevelComponent
							weather={weather}
							zipCode={zipCode}
							changeZipCode={changeZipCode}
							searchByZipCode={searchByZipCode}/>

					: 
						<div>loading</div>
				}
				{
					forecastLoaded
					? 
						<BottomLevelComponent
							forecast={forecast}/>

					: 
						<div>loading</div>
				}
			</div>
		);
	}
}

export default LoadWeatherData(App);
