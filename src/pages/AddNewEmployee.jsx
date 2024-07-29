import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from '../components/employee-form/EmployeeForm';


const AddNewEmployee = () => {
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
					axios.get('http://localhost:3000/employees'),
					axios.get('http://localhost:3000/positions')			
				]);

				setEmployees(employeesResponse.data);
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
			<h1 className="page-title">Add New Employee</h1>
			{employees && positions ? (
				<EmployeeForm employees={employees} positions={positions} />
				): (<p>Your form is not showing. Contact Jaki!</p>
				)}
		</>
	);
};

export default AddNewEmployee;