import ClockDisplay from '../shared/clock-display';

const LocalClock = ({ date, timezone, offset }) => {
	return (
		<div>
			<ClockDisplay
				date={date}
				title={'my clock'}
				timezone={timezone}
				offset={offset}
			></ClockDisplay>
		</div>
	);
};

export default LocalClock;
