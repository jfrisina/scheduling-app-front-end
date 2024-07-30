// IMPORTS ---------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeList from '../components/employee-list/EmployeeList';
import EmployeeButtons from '../components/employee-buttons/EmployeeButtons';


const Employees = () => {

	// useState to save data 
	const [data, setData] = useState(null);
	
	// function useEffect to run code  
	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get('http://localhost:3000/employees');
				setData(response.data);
				//conditional rendering in function for data display
			} catch (error) {
				console.error(error);
			}
		};
		getData();
	}, []);

  // page display	
  return (
	<>
    <h1 className="page-title">Employees</h1>
	<EmployeeButtons />
	{data? <EmployeeList data={data} /> : <p>There are no employees to show. Contact Jaki!</p>}
	</>
  );
};

export default Employees;

