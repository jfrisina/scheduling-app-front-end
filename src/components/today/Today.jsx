import './Today.css';
import { Link } from 'react-router-dom';

const Schedule = ({ data }) => {
	return (
		<div className="schedule">
			<h2>Today</h2>
			<table>
				<thead>
					<tr>
					<th>Start Time</th>
					<th>Position</th>
					<th>Employee</th>
				</tr>
				</thead>
				<tbody>
				{data.map(({id, starttime, position, name }) => (
					<tr key={id}>
						<td>{starttime}</td>
						<td>{position}</td>
						<td>{name}</td>		
					</tr>
						))}
					{/* <td>{data.starttime}</td>
					<td>{data.position}</td>
					<td>{data.name}</td> */}
		
				</tbody>
				
			</table>
		</div>
	);
};

/* EXPORT ------------------------------*/
export default Schedule;