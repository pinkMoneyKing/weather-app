import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';


const forcastWrapperStyles = {
	display: 'flex',
	flexWrap: 'wrap',
	width: '100%',
	// borderStyle: 'solid',
	// borderWidth: '2px',
	// borderColor: 'pink'
};


export default class ForcastDisplay extends Component {
	constructor(props){
		super(props);
		this.state = {};
		}

	render(){
		const {forecast} = this.props;
		const weatherForcast = [];
		console.log(forecast);
		return (
			<div>
				<div><strong>Forecast Display</strong></div>
				<div style={forcastWrapperStyles}>
					{forecast.list.map((value, index) => {
						return (
							<div key={index}>
							<WeatherDisplay weather={value}/>
						</div>
							)
					})}
				</div>
			</div>
		)
	}
}
