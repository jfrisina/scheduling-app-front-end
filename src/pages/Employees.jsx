import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Employees = () => {

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
    <h1 class="page-title">Employees</h1>

    // add employee collection/table to mongo db

    // add employee's positions available to work on the mongo db

    // pull employee data through API from mongo db

    // Display all employees in a list 

    // add an edit button next to each employee

    // direct user to Edit Employee Form 

  );
};

export default Employees;

