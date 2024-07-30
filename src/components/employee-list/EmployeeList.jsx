/* IMPORTS -------------------------------------------------------------*/
import './EmployeeList.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


/* EMPLOYEE LIST -------------------------------------------------------------*/
const EmployeeList = ({ data }) => {
	// sort data by time
	const sortedData = [...data].sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	const handleDelete = async (_id) => {
		try {
			await axios.delete(`http://localhost:3000/employees/${_id}`)
			setDeleteData(!deleteData);
		} catch (error) {
			console.error(error);
		}
	}
	
	// useState to handle refreshing page after Delete
	const [deleteData, setDeleteData] = useState(false);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

		// function useEffect to run code  
		useEffect(() => {
			async function getData() {
				try {
					setLoading(true);
					const [employeesResponse, positionsResponse] = await axios.get(`http://localhost:3000/employees/`);
					setEmployees(employeesResponse.data);
				} catch (error) {
					setError(error);
					console.error(error);
				} finally {
					setLoading(false);
				}
			 };
			getData();
		}, [deleteData]); //set dependency to make sure it's looking there

	return (
		<div className="employee-list">
			<table className="employee-table">
				<thead>
					<tr>
					<th>Name</th>
					<th>Position</th>
					<th>Restriction</th>
					<th>Phone</th>
					<th>Notification</th>
				</tr>
				</thead>
				<tbody>
				{sortedData.map(({_id, name, position, restriction, phone, notification  }) => (
					<tr className="employee-table-row" key={_id}>
						<td className="table-name">{name}</td>
						<td className="table-position">{position}</td>
						<td className="table-employee">{restriction}</td>		
						<td className="table-position">{phone}</td>
						<td className="table-employee">{notification}</td>	
						<td><a href="/edit-employee" className="button edit-button">Edit</a></td>
						<td><button onClick={() => {handleDelete(_id)}}>Delete</button></td>
							
					</tr>
						))}		
				</tbody>
			</table>
		</div>
	);
};

/* EXPORT ------------------------------*/
export default EmployeeList;