import { useEffect, useState } from 'react';
import { TIMEZONE_OFFSET } from '../../../constants/timezone';
import { getOffset } from '../../../utils/timezone';
import styled from 'styled-components';

const Button = styled.button`
	padding: 0.6rem 2rem;
	background-color: ${({ theme }) => theme.colors.secondary.bg};
	border: none;
	border-radius: 0.5rem;
	width: 100%;
	max-width: 120px;
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.colors.primary.fg};
		transition: color 0.3s ease;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const Input = styled.input`
	appearance: none;
	outline: none;
	padding: 0.4rem 0.8rem;
	background-color: ${({ theme }) => theme.colors.primary.fg};
	border: none;
	outline: 1px solid #272a29;
	border-radius: 0.2rem;
	&::placeholder {
		color: #272a29;
	}
	caret-color: #000;
	color: ${({ theme }) => theme.colors.primary.text} !important;
`;

const Select = styled.select`
	// appearance: none;
	outline: none;
	padding: 0.2rem 0.4rem;
	background-color: ${({ theme }) => theme.colors.primary.fg};
	border-radius: 0.2rem;
	color: ${({ theme }) => theme.colors.primary.text};
	border: none;
	outline: 1px solid #272a29;
`;

const Option = styled.option``;

const SelectGroup = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const Label = styled.label`
	font-size: 0.9rem;
`;

const ClockForm = ({
	values = { title: '', timezone: 'UTC', offset: 0 },
	handleClock,
	title = true,
	edit = false,
}) => {
	const [formValues, setFormValues] = useState({ ...values });

	useEffect(() => {
		if (TIMEZONE_OFFSET[formValues.timezone]) {
			setFormValues(prev => ({
				...prev,
				offset: TIMEZONE_OFFSET[formValues.timezone],
			}));
		}
	}, [formValues.timezone]);

	const handleChange = e => {
		let { name, value } = e.target;

		if (name === 'offset') {
			value = Number(value) * 60;
		}

		setFormValues(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		handleClock(formValues);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<div>
				<Input
					type="text"
					id="title"
					name="title"
					value={formValues.title}
					onChange={handleChange}
					disabled={!title}
					placeholder="Enter a title for this clock"
				/>
			</div>
			<SelectGroup>
				<Label htmlFor="timezone">Timezone</Label>
				<Select
					id="timezone"
					name="timezone"
					value={formValues.timezone}
					onChange={handleChange}
				>
					<option value="GMT">GMT</option>
					<option value="UTC">UTC</option>
					<option value="PST">PST</option>
					<option value="EST">EST</option>
					<option value="EDT">EDT</option>
					<option value="BST">BST</option>
					<option value="MST">MST</option>
				</Select>
			</SelectGroup>
			{(formValues.timezone === 'GMT' || formValues.timezone === 'UTC') && (
				<SelectGroup>
					<Label htmlFor="offset">Offset</Label>
					<Select
						id="offset"
						name="offset"
						value={formValues.offset / 60}
						onChange={handleChange}
					>
						{getOffset().map(offset => (
							<option key={offset} value={offset}>
								{offset}
							</option>
						))}
					</Select>
				</SelectGroup>
			)}
			<Button>{edit ? 'Update' : 'Create'}</Button>
		</Form>
	);
};

export default ClockForm;
