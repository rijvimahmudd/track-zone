import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import ClockDisplay from './components/shared/clock-display';
import useClock from './hooks/useClock';

function App() {
	const { date: localDate, localTimezone, localOffset } = useClock();

	return (
		<div className="App">
			{localDate && (
				<LocalClock
					date={localDate}
					timezone={localTimezone}
					offset={-localOffset}
				/>
			)}
			<ClockList />{' '}
		</div>
	);
}

export default App;
