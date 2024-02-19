import { intlFormatDistance } from 'date-fns';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';
import styled from 'styled-components';

const Div = styled.div`
	background-color: ${({ theme }) => theme.colors.primary.fg};
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	padding: 2rem 1.5rem;
	border-radius: 0.8rem;
	max-width: 350px;
	width: 100%;
	position: relative;
`;

const Paragraph = styled.p`
	color: #34393d;
	font-size: 0.9rem;
	font-weight: 400;
`;

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
	const { date } = useClock(clock.timezone, clock.offset);

	const timer = useTimer(date);

	if (!date || !timer) return null;

	return (
		<Div>
			<ClockDisplay
				date={timer}
				timezone={clock.timezone}
				title={clock.title}
				offset={clock.offset}
			/>
			<Paragraph>you are {intlFormatDistance(localClock, timer)} </Paragraph>
			<ClockActions
				clock={clock}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</Div>
	);
};

export default ClockListItem;
