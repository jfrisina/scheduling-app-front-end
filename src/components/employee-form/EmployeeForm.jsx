/* IMPORTS -------------------------------------------------------------*/
import React from 'react';
import './EmployeeForm.css';


/* SHIFT FORM CODE -------------------------------------------------------------*/

const EmployeeForm = ({ data }) => {

	// prevent default behavior for submit button
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				{/* NAME -------------------------------------------------------------  */}
				<label htmlFor="name">Name</label>
				<input type="text" id="name" placeholder="Name" name="name" />

				{/* POSITIONS -------------------------------------------------------------  */}

				<fieldset>
					<legend>Select your options:</legend>
					
					{data.map(({ id, position }) => (
					<div>
						<input key={id} type="checkbox" id="{position}" name="{position}" value="{position}" />
						<label for="{position}">{position}</label>
						</div>
					))}
			

				</fieldset>

				{/* RESTRICTIONS -------------------------------------------------------------  */}
				<label htmlFor="restrictions">Restrictions</label>
				<input type="text" id="restrictions" name="restrictions" />

				{/* PHONE -------------------------------------------------------------  */}
				<label htmlFor="phone">Phone</label>
				<input type="text" id="phone" placeholder="Phone" name="phone" />


				{/* NOTIFICATIONS -------------------------------------------------------------  */}

       			<label for="example-select">Notifications:</label>

				<select id="example-select" name="example-option">
				
					<option value="" disabled selected>Select an option</option>
					<option value="option1">Text</option>
					<option value="option2">Email</option>
					<option value="option3">Text and Email</option>
					<option value="option4">None</option>
				</select>

				{/* SUBMIT -------------------------------------------------------------  */}
				<button type="button" onClick={() => window.location.href='https://example.com'}>Submit</button>
			</form>
		</>
	)
}

/* EXPORT -----------------------------------------*/
export default EmployeeForm;