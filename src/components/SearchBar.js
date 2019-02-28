import React, { PureComponent } from 'react';
import '../scss/SearchBar.scss';


class SearchBar extends PureComponent {
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
			<div className='searchBar'>
				<div>Weather by Zip Code</div>
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
