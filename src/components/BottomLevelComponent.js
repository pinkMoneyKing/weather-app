import React, { Component }			from 'react';
import ForcastDisplay						from './ForcastDisplay';


const componentWrapper = {
	display: 'flex',
	justifyContent: 'flex-start',
	// borderStyle: 'solid',
	// borderWidth: '.9px',
	// borderColor: 'rgb(223, 225, 229)',
	// borderRadius: '8px',
}


export default class BottomLevelComponent extends Component {
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
			<div style={componentWrapper}>
				<ForcastDisplay
					selectDate={selectDate}
					forecast={forecast} />
			</div>
		);
	}
}

