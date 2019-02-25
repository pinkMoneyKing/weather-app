import React, { Component } from 'react';
import {SearchCurrentWeatherByZipCode} from '../api/WeatherApiCalls';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
				error: null,
				location: 78751,
				weather: {},
			};
	}
	render(){
		const {
			weather,
			zipCode,
			searchZipCode,
			changeZipCode,
			} = this.props;
		console.log('weather', weather);
		return(
			<div>
				<div>Current City {weather.name}</div>
				<form onSubmit={searchZipCode}>
					<label>
						Search By Zip Code
						<input 
							type="text" 
							onChange={changeZipCode}
							value={zipCode}
							name="Zip Code" />
					</label>
					<input type="submit" value="Search" />
				</form>
			</div>
		)
	}
}

export default SearchCurrentWeatherByZipCode(SearchBar);
