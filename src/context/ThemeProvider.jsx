import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
	colors: {
		primary: {
			bg: '#E9A8F2',
			fg: '#F3CCF3',
			text: '#0A1D56',
			badge: '#FFE7C1',
			dark: '#0A1D56',
		},
		secondary: {
			bg: '#492E87',
			fg: '#ffffff',
		},
	},
};

const ThemeProvider = ({ children }) => {
	return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
