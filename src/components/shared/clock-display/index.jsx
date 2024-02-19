import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import getWeekOfMonth from '../../../utils/getWeekOfMonth';

const Div = styled.div`
	color: ${({ theme }) => theme.colors.primary.text};
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.2rem;
`;

const Title = styled.h1`
	color: ${({ theme }) => theme.colors.primary.text};
	font-size: 1.8rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const SubTitle = styled.h3`
	color: ${({ theme }) => theme.colors.primary.text};
	font-size: 1rem;
	font-weight: 500;
`;

const Badge = styled.p`
	color: ${({ theme }) => theme.colors.primary.text};
	font-size: 0.8rem;
	margin: 0 0;
	font-weight: 600;
	background-color: ${({ theme }) => theme.colors.primary.badge};
	display: inline-block;
	padding: 0.2rem 0.8rem;
	border-radius: 50px;
	position: absolute;
	top: -10px;
	right: 0;
`;

const ClockDisplay = ({ date, title, timezone, offset }) => {
	let offsetHr = offset / 60;
	return (
		<Div>
			<Title>{title ? title : 'New Clock'}</Title>
			<SubTitle>
				{format(date, 'PPP')}, {format(date, 'eeee')}
			</SubTitle>
			<SubTitle style={{ fontSize: '1.2rem', fontWeight: '600' }}>
				{format(date, 'hh:mm:ss a')}
			</SubTitle>
			<p
				style={{
					fontSize: '0.7rem',
					fontWeight: '300',
				}}
			>
				{`${getWeekOfMonth(date)} of the month`}
			</p>
			<Badge>
				{timezone}
				{offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
			</Badge>
		</Div>
	);
};

export default ClockDisplay;
