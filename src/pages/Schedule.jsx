// IMPORTS -------------------------------------------
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodaySchedule from '../components/today/Today';

const Schedule = () => {
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
			<h1 className="page-title">Schedule</h1>
			{data? <TodaySchedule data={data} /> : <p>There are no shifts to show. Contact Jaki!</p>}
		</>
	);
};

export default Schedule;