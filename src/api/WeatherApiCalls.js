import React, { Component } from 'react';
// export function SearchCurrentWeatherByZipCode(){
// 	// if country code is not specified then the search works for USA as default
// 	const cityZipCode = '78751';
// 	const currentWeather = fetch(`api.openweathermap.org/data/2.5/weather?zip=${cityZipCode}&APPID=2e6df9d6535a9357d1c523ac78374cf2`)
// 	.then(function(response){
// 		return response.json();
// 	});
// }

export function SearchCurrentWeatherByZipCode(WrappedComponent){
	return class extends Component {
		constructor(props){
			super(props);
			this.state = {
				cityLoaded: false,
				selectedCityZipCode: '78751',
				weather: {},
			}
			this.changeZipCode = this.changeZipCode.bind(this);
			this.searchZipCode = this.searchZipCode.bind(this);
		}
		

		changeZipCode(zipCode){
			this.setState({
				selectedCityZipCode: zipCode
			});
		}

		searchZipCode(){
			const current_location = this.state.selectedCityZipCode;
			this.setState({cityLoaded: false});
			fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${current_location}&units=imperial&APPID=2e6df9d6535a9357d1c523ac78374cf2`)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						weather: result,
						cityLoaded: true,
						});
					},
				(error) => {
					this.setState({error});
					})
		};


		componentDidMount(){
			// Default City is Austin
			this.searchZipCode();
		};
		render(){
			return (
				<WrappedComponent 
					cityLoaded={this.state.cityLoaded}
					changeZipCode={this.changeZipCode}
					searchZipCode={this.searchZipCode}
					zipCode={this.state.selectedCityZipCode}
					weather={this.state.weather} 
					{...this.props}/>
			)
		}
	}
}
