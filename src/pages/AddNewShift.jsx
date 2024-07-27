import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShiftForm from '../components/shift-form/ShiftForm';


const AddNewShift = () => {
	// useState to save data 
	const [data, setData] = useState(null);
	
	// function useEffect to run code  
	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get('http://localhost:3000/shift');
				setData(response.data);
				//conditional rendering in function for data display
			} catch (error) {
				console.error(error);
			}
	 	};
		getData();
	}, []);

	return (
		<>
			<h1 className="page-title">Add New Shift</h1>
			{data? <ShiftForm data={data} />: <p>Your form is not showing. Contact Jaki!</p>}
		</>
	);
};

export default AddNewShift;