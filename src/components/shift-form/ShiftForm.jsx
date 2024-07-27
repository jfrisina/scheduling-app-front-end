/* IMPORTS -------------------------------------------------------------*/
import React from 'react';
import './ShiftForm.css';



/* SHIFT FORM CODE -------------------------------------------------------------*/

const ShiftForm = ({ data }) => {

	// prevent default behavior for submit button
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	// only show unique positions (removes duplicates)
	const getUniquePositions = (data) => {
		const positionsCopy = new Set();
		return data.filter(({ position }) => {
			const duplicate = positionsCopy.has(position);
			positionsCopy.add(position);
			return !duplicate;
		});
	};

	// save unique positions into variable
	const uniqueData = getUniquePositions(data);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" placeholder="Name" name="name" />

				<label htmlFor="position">Position</label>
				<select id="position" name="position">
					
					<option class="select-disabled" value="" disabled selected>Select a position</option>

					{/* pull in data to use for form dropdowns */}
					{uniqueData.map(({ id, starttime, position, name, endtime }) => (
						<option key={id} value={position}>{position}</option>
				))}
				</select>

				<label htmlFor="shift-date">Shift Date</label>
				<input type="date" id="shift-datedate" name="shift-date" />

				<label htmlFor="start-time">Start Time</label>
				<input type="text" id="starttime" placeholder="Start Time" name="start-time" />

				<label htmlFor="end-time">End Time</label>
				<input type="text" id="end-time" placeholder="End Time" name="end-time" />

				<button type="button" onClick={() => window.location.href='https://example.com'}>
  Submit
</button>
			</form>
		</>
	)
}

/* EXPORT -----------------------------------------*/
export default ShiftForm;