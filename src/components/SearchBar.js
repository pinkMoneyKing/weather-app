import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = null;
		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}
	handleChange(event){
		event.preventDefault();
		this.props.changeZipCode(event.target.value);
	}
	submitForm(event){
		event.preventDefault();
		this.props.searchZipCode();
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
				<form onSubmit={this.submitForm}>
					<label>
						Search By Zip Code
						<input 
							type="text" 
							onChange={this.handleChange}
							value={zipCode}
							name="Zip Code" />
					</label>
					<input type="submit" value="Search" />
				</form>
			</div>
		)
	}
}

export default SearchBar;
