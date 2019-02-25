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
				selectedCityZipCode: '',
				weather: {},
			}
			this.changeZipCode = this.changeZipCode.bind(this);
			this.searchZipCode = this.searchZipCode.bind(this);
		}

		changeZipCode(event){
			event.preventDefault();
			console.log(event.target.value);
			this.setState({
				selectedCityZipCode: event.target.value
			});
		}

		searchZipCode(event){
			event.preventDefault();
			const current_location = this.state.selectedCityZipCode;
			event.preventDefault();
			console.log('searching for city', current_location);
			fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${current_location}&units=imperial&APPID=2e6df9d6535a9357d1c523ac78374cf2`)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						weather: result
						});
					},
				(error) => {
					this.setState({error});
					})
		};


		componentDidMount(){
		};
		render(){
			return (
				<WrappedComponent 
					changeZipCode={this.changeZipCode}
					searchZipCode={this.searchZipCode}
					zipCode={this.state.selectedCityZipCode}
					weather={this.state.weather} 
					{...this.props}/>
			)
		}
	}
}
