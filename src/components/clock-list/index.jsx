import styled from 'styled-components';
import ClockListItem from './clock-list-item';

import { nanoid } from 'nanoid';

const Title = styled.h3`
	color: ${({ theme }) => theme.colors.primary.text};
	font-size: 1.1rem;
	text-transform: uppercase;
	font-weight: 900;
	position: relative;
	display: inline-block;
	&::after {
		content: '';
		width: 5%;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.primary.text};
		position: absolute;
		bottom: 0;
		left: 0;
		border-radius: 500px;
	}
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	position: relative;
	margin-top: 5rem;
	min-height: 33vh;
`;

const CardGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1.5rem;
	justify-items: center;
	align-items: center;
	justify-content: center;
	align-content: center;
`;

const ClockNotFoundTitle = styled.p`
	color: ${({ theme }) => theme.colors.primary.text};
	font-size: 3rem;
	margin-top: 1rem;
	opacity: 0.2;
	font-weight: 300;
`;

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
	return (
		<Div>
			<Title>comparison clocks</Title>

			{clocks.length === 0 ? (
				<ClockNotFoundTitle>
					There is no clock 00:00, please create one
				</ClockNotFoundTitle>
			) : (
				<CardGroup>
					{clocks.map(clock => (
						<ClockListItem
							clock={clock}
							key={nanoid()}
							localClock={localClock}
							updateClock={updateClock}
							deleteClock={deleteClock}
						/>
					))}
				</CardGroup>
			)}
		</Div>
	);
};

export default ClockList;
