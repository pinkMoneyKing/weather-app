import React, { Component }			from 'react';

const pageWrapperStyles = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
	alignItems: 'center',
	width: '98%',
	// borderStyle: 'solid',
	// borderWidth: '2px',
	// borderColor: 'pink',
	marginLeft: 'auto',
	marginRight: 'auto',
};


const timeStyle = {
	display: 'flex',
	justifyContent: 'center',
	color: '#878787',
	fontFamily: 'Roboto, arial, sans-serif',
};

const hourStyles = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	marginRight: '2px',
	width: '10em',
	// width: '100%',
	borderStyle: 'solid',
	borderWidth: '.9px',
	borderColor: 'rgb(223, 225, 229)',
	borderRadius: '8px',
};

const descripitionStyles = {
	color: '#878787',
	fontFamily: 'Roboto, arial, sans-serif',
	fontSize: '20px',
	fontWeight: 'bold',
}


const fontStyles = {
	color: '#878787',
	fontFamily: 'Roboto, arial, sans-serif',
}


export default class HourForecastDisplay extends Component {
	constructor(props){
		super(props)
		this.state = {};
	}

	render(){
		const {
			selectedDateObject
		} = this.props;
		return (
			<div style={pageWrapperStyles}>
				{selectedDateObject.map((date, index) => {
					const time = date.dt_txt.split(' ')[1];
					const dateTime = new Date(date.dt * 1000);
					const dateTimeArray = dateTime.toString().split(' ');
					const weatherIcon = `http://openweathermap.org/img/w/${date.weather[0].icon}.png`;
					return(
						<div key={index}>
							<div style={timeStyle}>{time}</div>
								<div style={hourStyles}>
								<div 
									style={descripitionStyles}>
									{date.weather[0].description}
								</div>
								<div style={fontStyles}>{date.main.temp} &#8457;</div>
								<img 
									src={weatherIcon} 
									height='60px'
									width='50px'
									alt={date.weather[0].main}/>
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}
