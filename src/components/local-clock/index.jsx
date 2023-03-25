import { useEffect } from 'react';
import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const LocalClock = ({ clock, updateClock }) => {
	const { date, timeZone, offset, dateUTC } = useClock(
		clock.timezone,
		clock.offset
	);

	useEffect(() => {
		updateClock({
			date,
			timezone: timeZone,
			offset,
		});
	}, [date]);
	return (
		<div>
			{date && (
				<ClockDisplay
					date={date}
					title={clock.title}
					timezone={timeZone}
					offset={offset}
				/>
			)}
			<ClockActions local={true} clock={clock} updateClock={updateClock} />
		</div>
	);
};

export default LocalClock;
