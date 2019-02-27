import React, { Component }			from 'react';
import SearchBar								from './SearchBar';
import WeatherDisplay						from './WeatherDisplay';


const componentWrapper = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start'
}


export default class TopLevelComponent extends Component {
	constructor(props){
		super(props)
			this.state = {};
	}

	render(){
		const {
			weather,
			forecast,
			currentWeatherLoaded,
			forecastLoaded,
			zipCode,
			searchByZipCode,
			changeZipCode,
			} = this.props;
		return(
			<div style={componentWrapper}>
				<SearchBar 
					weather={weather}
					zipCode={zipCode}
					changeZipCode={changeZipCode}
					searchByZipCode={searchByZipCode}
				/>
				<WeatherDisplay weather={weather} />
			</div>
		);
	}
}

