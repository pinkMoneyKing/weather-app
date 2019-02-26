import React, { Component } from 'react';


const SearchBarStyles = {
	display: 'flex',
	justifyContent: 'space-between',
	alignContent: 'center',
	marginBottom: '2em',
	width: '50%',
	marginLeft: 'auto',
	marginRight: 'auto',
	// borderStyle: 'solid',
	// borderWidth: '2px',
	// borderColor: 'pink',
};


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
		this.props.searchByZipCode();
	}
	render(){
		const {
			zipCode,
			searchByZipCode,
			changeZipCode,
			} = this.props;
		return(
			<div style={SearchBarStyles}>
				<div>Search for weather by zip code</div>
				<form onSubmit={this.submitForm}>
						<input 
							type="text" 
							onChange={this.handleChange}
							value={zipCode}
							name="Zip Code" />
					<input type="submit" value="Search" />
				</form>
			</div>
		)
	}
}

export default SearchBar;
