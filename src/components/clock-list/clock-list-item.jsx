import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const ClockListItem = ({ clock, updateClock, deleteClock }) => {
	const { date } = useClock(clock.timezone, clock.offset);

	if (!date) return null;
	return (
		<div>
			<ClockDisplay
				date={date}
				timezone={clock.timezone}
				title={clock.title}
				offset={clock.offset}
			/>

			<ClockActions
				clock={clock}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</div>
	);
};

export default ClockListItem;
