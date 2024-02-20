import { useState } from 'react';
import ClockForm from '../clock-form';
import styled from 'styled-components';

const Button = styled.button`
	padding: 0.6rem 1.2rem;
	background-color: ${({ theme }) => theme.colors.secondary.bg};
	border: none;
	border-radius: 0.4rem;
	width: 100%;
	max-width: 150px;
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.colors.primary.fg};
		transition: color 0.3s ease;
	}
	color: ${({ theme }) => theme.colors.secondary.fg};
	margin-top: 0.8rem;
`;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1.5rem;
`;

const SettingCard = styled.div``;

const SettingFormCard = styled.div`
	position: absolute;
	top: 10px;
	bottom: 10px;
	left: 0;
	right: 0;
	background-color: ${({ theme }) => theme.colors.primary.fg};
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0rem 1.5rem;
	gap: 0.7rem;
	color: ${({ theme }) => theme.colors.primary.text};
	& .close {
		position: absolute;
		top: 0;
		right: 1rem;
	}
	transition: all 0.3s ease;
	border-radius: 0.8rem;
`;

const ButtonOutlined = styled(Button)`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.primary.text};
	border: 1px solid ${({ theme }) => theme.colors.primary.text};
	&:hover {
		background-color: ${({ theme }) => theme.colors.secondary.bg};
		color: ${({ theme }) => theme.colors.primary.fg};
		transition: all 0.3s ease;
	}
`;

const ClockActions = ({
	local = false,
	clock,
	updateClock,
	createClock,
	deleteClock,
}) => {
	const [isEdit, setIsEdit] = useState(false);
	const [isCreate, setIsCreate] = useState(false);

	const handleClock = values => {
		createClock(values);
		console.log(values, 'created');
		// createClock({ id: nanoid(), ...values });
	};
	return (
		<SettingCard>
			{local ? (
				<Button onClick={() => setIsCreate(true)}>
					{isCreate ? 'Cancel' : 'Create & Compare'}
				</Button>
			) : (
				<ButtonGroup>
					<Button onClick={() => setIsEdit(!isEdit)}>Edit</Button>
					<ButtonOutlined onClick={() => deleteClock(clock.id)}>
						Delete
					</ButtonOutlined>
				</ButtonGroup>
			)}
			{isEdit && (
				<SettingFormCard>
					<h3>Edit Clock</h3>
					<div
						style={{
							cursor: 'pointer',
							position: 'absolute',
							top: 10,
							right: '1rem',
							fontSize: '1rem',
						}}
						onClick={() => setIsEdit(false)}
					>
						x
					</div>
					<ClockForm
						handleClock={updateClock}
						edit={true}
						title={!local}
						values={clock}
					/>
				</SettingFormCard>
			)}
			{isCreate && (
				<SettingFormCard>
					<div
						className="close"
						onClick={() => setIsCreate(false)}
						style={{ cursor: 'pointer' }}
					>
						X
					</div>
					<h3 style={{}}>Create new clock</h3>
					<ClockForm handleClock={handleClock} />
				</SettingFormCard>
			)}
		</SettingCard>
	);
};

export default ClockActions;
