import { useState } from 'react';
import { nanoid } from 'nanoid';
import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';

const LOCAL_CLOCK_INIT = {
	title: 'My Clock',
	timezone: '',
	offset: 0,
	date: null,
};

const App = () => {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });

	const [clocks, setClocks] = useState([]);

	const updateLocalClock = data => {
		setLocalClock({
			...localClock,
			...data,
		});
	};

	const createClock = clock => {
		clock.id = nanoid();
		setClocks([...clocks, clock]);
		console.log(clock);
	};

	const updateClock = updatedClock => {
		const updatedClocks = clocks.map(clock => {
			if (clock.id === updatedClock.id) return updatedClock;

			return clock;
		});

		setClocks(updatedClocks);
	};

	const deleteClock = id => {
		const filteredArray = clocks.filter(clock => clock.id !== id);

		setClocks(filteredArray);
	};

	return (
		<div>
			<LocalClock
				clock={localClock}
				updateClock={updateLocalClock}
				createClock={createClock}
			/>
			<ClockList
				localClock={localClock.date}
				clocks={clocks}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</div>
	);
};

export default App;
