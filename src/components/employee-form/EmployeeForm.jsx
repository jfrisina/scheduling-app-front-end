/* IMPORTS -------------------------------------------------------------*/
import React from 'react';
import './EmployeeForm.css';


/* EMLOYEE FORM CODE -------------------------------------------------------------*/

const EmployeeForm = ({ employees, positions }) => {

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
				
				{/* PHONE -------------------------------------------------------------  */}
				<label htmlFor="phone">Phone</label>
				<input type="text" id="phone" placeholder="Phone" name="phone" />


				{/* NOTIFICATIONS -------------------------------------------------------------  */}

				<label htmlFor="example-select">Notifications:</label>

				<select id="example-select" name="example-option" defaultValue="default">

					<option value="default" disabled>Select an option</option>
					<option value="option1">Text</option>
					<option value="option2">Email</option>
					<option value="option3">Text and Email</option>
					<option value="option4">None</option>
				</select>

				{/* POSITIONS -------------------------------------------------------------  */}

				<fieldset>
					<legend className="legend">Select positions employee can work:</legend>
					
					{positions.map(({ id, position }) => (
						<div className='positions' key={id}>
							<input type="checkbox" id={position} name={position} value={position} />
							<label htmlFor={position}>{position}</label>
						</div>
					))}
				</fieldset>

					{/* RESTRICTIONS -------------------------------------------------------------  */}
					<label htmlFor="restrictions">Restrictions</label>
				<input type="text" id="restrictions" name="restrictions" />


				{/* SUBMIT -------------------------------------------------------------  */}
				<button type="button" onClick={() => window.location.href='/employees'}>Submit</button>
			</form>
		</>
	)
}

/* EXPORT -----------------------------------------*/
export default EmployeeForm;