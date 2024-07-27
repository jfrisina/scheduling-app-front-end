import React, { useState, useEffect } from 'react';
import ShiftForm from '../components/shift-form/ShiftForm';

const TaskComplete = () => {
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
			<h1 className="page-title">Shift Added!</h1>
			<div class="form-complete-icon">
				<i class="fa-solid fa-square-check"></i>
				<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
				</svg>
			</div>		
			<div>
				<a href="#" class="button">Edit Shift</a>
				<a href="/add-new-shift" class="button">Add Another Shift</a>
				<a href="/" class="button">Go Home</a>

			</div>
		</>
	);
};

export default TaskComplete;