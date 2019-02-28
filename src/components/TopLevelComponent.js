import React, { PureComponent }			from 'react';
import SearchBar								from './SearchBar';
import WeatherDisplay						from './WeatherDisplay';
import '../scss/TopLevelComponent.scss';


export default class TopLevelComponent extends PureComponent {
	constructor(props){
		super(props)
			this.state = {};
	}

	render(){
		const {
			weather,
			zipCode,
			searchByZipCode,
			changeZipCode,
			} = this.props;
		return(
			<div className='searchBarWeatherDisplayWrapper'>
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

