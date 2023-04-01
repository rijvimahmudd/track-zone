import ClockListItem from './clock-list-item';

import { nanoid } from 'nanoid';

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
	return (
		<div>
			<h3>Other clocks</h3>
			<hr />

			{clocks.length === 0 ? (
				<p>There is no clock, please create one</p>
			) : (
				<div>
					{clocks.map(clock => (
						<ClockListItem
							clock={clock}
							key={nanoid()}
							localClock={localClock}
							updateClock={updateClock}
							deleteClock={deleteClock}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default ClockList;
