import React, { PureComponent }			from 'react';
import ForecastDisplay						from './ForcastDisplay';
import '../scss/BottomLevelComponent.scss';


export default class BottomLevelComponent extends PureComponent {
	constructor(props){
		super(props)
			this.state = {};
	}

	render(){
		const {
			forecast,
			selectDate,
			} = this.props;
		return(
			<div className='BottomLevelComponent'>
				<ForecastDisplay
					selectDate={selectDate}
					forecast={forecast} />
			</div>
		);
	}
}

