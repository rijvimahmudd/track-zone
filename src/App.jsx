import { useState } from 'react';
import { nanoid } from 'nanoid';
import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import ThemeProvider from './context/ThemeProvider';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${({ theme }) => theme.colors.primary.bg};
		font-family: poppins, sans-serif;
		font-size: 1rem;
		padding: 3rem 8rem;
		@media (max-width: 768px) {
			padding: 3rem 1.5rem;
		}
	}
`;

const Footer = styled.div`
	color: ${({ theme }) => theme.colors.primary.text};
	text-align: center;
	bottom: 0;
	padding-top: 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
`;

const Link = styled.a`
	color: ${({ theme }) => theme.colors.primary.text};
`;

const LOCAL_CLOCK_INIT = {
	title: Intl.DateTimeFormat().resolvedOptions().timeZone,
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
		setClocks([...clocks, { ...clock }]);
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
		console.log('deleted', filteredArray);
	};

	return (
		<ThemeProvider>
			<GlobalStyle />
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

			<Footer>
				<p style={{ fontWeight: '600' }}>Design and Developed by Rijvi</p>
				<div style={{ display: 'flex', gap: '1rem' }}>
					<Link
						href="https://github.com/rijvimahmudd/track-zone"
						target="_blank"
						rel="noopener noreferrer"
					>
						@Github
					</Link>
					<Link
						href="https://www.linkedin.com/in/rijvi-mahmud"
						target="_blank"
						rel="noopener noreferrer"
					>
						@LinkedIn
					</Link>
				</div>
			</Footer>
		</ThemeProvider>
	);
};

export default App;
