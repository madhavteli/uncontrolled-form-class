import React, { Component } from 'react';
import classes from './UncontrolledForm.module.css';

class UncontrolledForm extends Component {

	formSaveHandler = (event) => {
		event.preventDefault();
		// alert(`
		// 	firstName: ${this.firstName.value}
		// 	lastName: ${this.lastName.value}
		// 	email: ${this.email.value}
		// 	phone: ${this.phone.value}
		// `);
		alert('firstName: '+this.firstName.value+'\nlastName: '+this.lastName.value+'\nemail: '+this.email.value+'\nphone: '+this.phone.value);
	};

	render() {
		return(
			<form  onSubmit={this.formSaveHandler}>
				<div className={classes.formFields}>
					<label>First Name</label><br/>
					<input type='text' name='firstName' ref={input => (this.firstName = input)}/>
				</div>
				<div className={classes.formFields}>
					<label>Last Name</label><br/>
					<input type='text' name='lastName' ref={input => (this.lastName = input)}/>
				</div>
				<div className={classes.formFields}>
					<label>Email</label><br/>
					<input type='email' name='email' ref={input => (this.email = input)}/>
				</div>
				<div className={classes.formFields}>
					<label>Phone Number</label><br/>
					<input type='text' name='phone' ref={input => (this.phone = input)}/>
				</div>
				<div className={classes.formFields}>
					<button type='submit' className={classes.btn}>Submit</button>
				</div>
			</form>
		);
	}
}

export default UncontrolledForm;