import React, { Component } from 'react';
import classes from './ControlledForm.module.css';

class ControlledForm extends Component {
	state = {
		enteredFirstName: "",
		enteredLastName: "",
		enteredEmail: "",
		enteredPhone: ""
	};

	changeHandler = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	formSaveHandler = (event) => {
		event.preventDefault();
		const { enteredFirstName, enteredLastName, enteredEmail, enteredPhone } = this.state;
		alert('firstName: '+enteredFirstName+'\nlastName: '+enteredLastName+'\nemail: '+enteredEmail+'\nphone: '+enteredPhone);
	};
	render() {
		const { enteredFirstName, enteredLastName, enteredEmail, enteredPhone } = this.state;
		return(
			<form  onSubmit={this.formSaveHandler}>
				<div className={classes.formFields}>
					<label>First Name</label><br/>
					<input type='text' name='enteredFirstName' value={enteredFirstName} onChange={this.changeHandler}/>
				</div>
				<div className={classes.formFields}>
					<label>Last Name</label><br/>
					<input type='text' name='enteredLastName' value={enteredLastName} onChange={this.changeHandler}/>
				</div>
				<div className={classes.formFields}>
					<label>Email</label><br/>
					<input type='email' name='enteredEmail' value={enteredEmail} onChange={this.changeHandler}/>
				</div>
				<div className={classes.formFields}>
					<label>Phone Number</label><br/>
					<input type='text' name='enteredPhone' value={enteredPhone} onChange={this.changeHandler}/>
				</div>
				<div className={classes.formFields}>
					<button type='submit' className={classes.btn}>Submit</button>
				</div>
			</form>
		);
	}
}

export default ControlledForm;