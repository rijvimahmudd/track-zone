/**
 *
 */

import { useState } from 'react';
import { getOffset } from '../../../utils/timezone';

const ClockForm = ({
	values = {},
	handleClock,
	title = true,
	edit = false,
}) => {
	const [formValues, setFormValues] = useState({ ...values });

	// const handleChange = e => {
	// 	const { name, value } = e.target;

	// 	// setFormValues({
	// 	// 	...formValues,
	// 	// 	[name]: value,
	// 	// });

	// 	setFormValues(prev => ({
	// 		...prev,
	// 		[name]: value,
	// 	}));
	// };

	const handleChange = e => {
		let { name, value } = e.target;
		if (name === 'offset') {
			value = Number(value) * 60;
		}
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		handleClock(formValues);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Enter title</label>
				<input
					type="text"
					name="title"
					id="title"
					value={formValues.title}
					onChange={handleChange}
					disabled={!title}
				/>
			</div>
			<div>
				<label htmlFor="timezone">Enter timezone</label>
				<input
					type="text"
					name="timezone"
					id="timezone"
					value={formValues.timezone}
					onChange={handleChange}
				/>
			</div>
			{(formValues.timezone === 'UTC' || formValues.timezone === 'GMT') && (
				<div>
					<label htmlFor="offset">Enter offset</label>

					<select
						name="offset"
						id="offset"
						value={formValues.offset / 60}
						onChange={handleChange}
					>
						{getOffset().map(offset => (
							<option value={offset} key={offset}>
								{offset}
							</option>
						))}
					</select>
				</div>
			)}
			<button>{edit ? 'update' : 'create'}</button>
		</form>
	);
};

export default ClockForm;
