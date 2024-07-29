/* IMPORTS -------------------------------------------------------------*/
import './EmployeeList.css';
import EmployeeButtons from '../employee-buttons/EmployeeButtons';


/* EMPLOYEE LIST -------------------------------------------------------------*/
const EmployeeList = ({ data }) => {
	// sort data by time
	const sortedData = [...data].sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

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
				{sortedData.map(({id, name, position, restriction, phone, notification  }) => (
					<tr className="employee-table-row" key={id}>
						<td className="table-name">{name}</td>
						<td className="table-position">{position}</td>
						<td className="table-employee">{restriction}</td>		
						<td className="table-position">{phone}</td>
						<td className="table-employee">{notification}</td>	
						<td><a href="/edit-employee" className="button edit-button">Edit</a></td>
						<td><a href="/delete-employee" className="button delete-button">Delete</a></td>
					</tr>
						))}		
				</tbody>
			</table>
			<EmployeeButtons />
		</div>
	);
};

/* EXPORT ------------------------------*/
export default EmployeeList;