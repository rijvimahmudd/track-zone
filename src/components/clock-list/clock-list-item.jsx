import { formatDistance } from 'date-fns';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
	const { date } = useClock(clock.timezone, clock.offset);

	const timer = useTimer(date);

	if (!date || !timer) return null;

	return (
		<div>
			<ClockDisplay
				date={timer}
				timezone={clock.timezone}
				title={clock.title}
				offset={clock.offset}
			/>
			<h3>{formatDistance(localClock, timer)}</h3>
			<ClockActions
				clock={clock}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</div>
	);
};

export default ClockListItem;
