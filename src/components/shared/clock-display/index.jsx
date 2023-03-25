import { format } from 'date-fns';

const ClockDisplay = ({ date, title, timezone, offset }) => {
	let localOffset = offset / 60;
	return (
		<>
			<h1>{title}</h1>
			<h3>{format(date, 'hh:mm:ss aaa')}</h3>
			<small>{format(date, 'dd-MM-yyyy')}</small>
			<p>
				{timezone} |{' '}
				{localOffset > 0
					? `+${Math.abs(localOffset)}`
					: `-${Math.abs(localOffset)}`}
			</p>
		</>
	);
};

export default ClockDisplay;
