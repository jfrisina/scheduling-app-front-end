/* IMPORTS -------------------------------*/
import './SideButtons.css';

/* MAIN CODE -------------------------------*/
const ScheduleButtons = () => {
	return (
		<div className="schedule-buttons">
    		<a href="/add-new-shift" className="button">Add New Shift</a>

			<a href="#" className="button">Select Different Date</a>

			<a href="#" className="button">See all available shifts</a>

			<a href="#" className="button">Report a Scheduling Problem</a>
		</div>
	);
};

/* EXPORT -------------------------------*/
export default ScheduleButtons;