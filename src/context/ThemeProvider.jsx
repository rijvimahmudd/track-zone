import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
	colors: {
		primary: {
			bg: '#FAC232',
			fg: '#FBBF24',
			text: '#292009',
			badge: '#FFCA42',
		},
		secondary: {
			bg: '#3F2F08',
			fg: '#ffffff',
		},
	},
};

const ThemeProvider = ({ children }) => {
	return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
