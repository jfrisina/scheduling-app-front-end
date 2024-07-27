/* IMPORTS -------------------------------------------------------------*/
import './Today.css';
import ScheduleButtons from '../side-buttons/SideButtons';


/* TODAY SCHEDULE CODE -------------------------------------------------------------*/
const TodaySchedule = ({ data }) => {
	// sort data by time
	const sortedData = [...data].sort((a, b) => new Date(a.starttime) - new Date(b.starttime));

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
				{sortedData.map(({id, starttime, position, name }) => (
					<tr key={id}>
						<td>{starttime}</td>
						<td className="table-position">{position}</td>
						<td className="table-employee">{name}</td>		
					</tr>
						))}		
				</tbody>
			</table>
			<ScheduleButtons />
		</div>
	);
};

/* EXPORT ------------------------------*/
export default TodaySchedule;