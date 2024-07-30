import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from '../components/employee-form/EmployeeForm';


const EditEmployee = () => {
	// useState to save data 
	const [employees, setEmployees] = useState(null);
	const [positions, setPositions] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);
	
	// function useEffect to run code  
	useEffect(() => {
		async function getData() {
			try {
				setLoading(true);
				const [employeesResponse, positionsResponse] = await Promise.all([
					// put route for edited info
					axios.get(`http://localhost:3000/employees${id}`),
					// get the data for the positions dropdown
					axios.get('http://localhost:3000/positions')			
				]);

				setEmployees(employeesRequest.data);
				setPositions(positionsResponse.data);
			} catch (error) {
				setError(error);
				console.error(error);
			} finally {
				setLoading(false);
			}
	 	};
		getData();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error loading data: {error.message}</p>;

	return (
		<>
			<h1 className="page-title">Edit Employee</h1>
			{employees && positions ? (
				<EmployeeForm employees={employees} positions={positions} />
				): (<p>Your form is not showing. Contact Jaki!</p>
				)}
		</>
	);
};

export default EditEmployee;