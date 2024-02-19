import React, { useEffect } from 'react';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';
import styled from 'styled-components';

const Div = styled.div`
	background-color: ${({ theme }) => theme.colors.primary.fg};
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	padding: 2rem 1.5rem;
	min-width: 300px;
	width: 35%;
	margin: 0 auto;
	border-radius: 0.8rem;
	margin-bottom: 0.8rem;
	min-height: 205px;
	position: relative;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const SettingModal = styled.div`
	border-radius: 0.8rem;
`;

const LocalClock = ({ clock, updateClock, createClock }) => {
	const { date, offset, timezone } = useClock(clock.timezone, clock.offset);

	const localTimer = useTimer(date);

	useEffect(() => {
		updateClock({
			date,
			timezone,
			offset,
		});
	}, [date]);

	return (
		<Div>
			{localTimer && (
				<ClockDisplay
					date={localTimer}
					offset={offset}
					timezone={timezone}
					title={clock.title}
				/>
			)}
			<SettingModal>
				<ClockActions
					clock={clock}
					updateClock={updateClock}
					local={true}
					createClock={createClock}
				/>
			</SettingModal>
		</Div>
	);
};

export default LocalClock;
