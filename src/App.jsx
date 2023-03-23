import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import useClock from './hooks/useClock';

function App() {
	const { clock: local } = useClock();
	const { clock: est } = useClock('EST');
	const { clock: pst } = useClock('PST');
	const { clock: utc } = useClock('UTC', 6 * 60);
	const { clock: edt } = useClock('EDT');
	const { clock: bst } = useClock('BST');
	const { clock: mst } = useClock('MST');

	return (
		<div className="App">
			<LocalClock />
			<ClockList />{' '}
		</div>
	);
}

export default App;
