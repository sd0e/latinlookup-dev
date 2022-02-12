import React from 'react';
import { Button, IconButton, ThemeProvider, createTheme } from '@mui/material';
import { RemoveCircleOutline } from '@mui/icons-material';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					width: "100%",
					borderRadius: "0.4rem",
					padding: "0.5rem 1rem",
					border: "none",
					transition: "0.1s ease-in-out",
					cursor: "pointer",
					color: "rgba(242, 242, 242, 0.8)",
					justifyContent: "space-between",
					marginBottom: "0.5rem",
					textTransform: "uppercase",
					letterSpacing: "0.15rem",
					fontFamily: "Inter, sans-serif",
					fontWeight: 600,
				}
			}
		}
	}
});

export default function HeadWord({ Word, Selected, Click }) {
	const id = `word-${Word}`;

	return (
		<ThemeProvider theme={theme}>
			<Button style={Selected ? { backgroundColor: "rgba(102, 102, 102, 0.1)" } : null} id={id} onClick={Click}>
				<span id={id}>{Word}</span>
				{/* <CustomIconButton aria-label="remove" size="small" id={id}>
					<RemoveCircleOutline fontSize="inherit" id={id} />
				</CustomIconButton> */}
			</Button>
		</ThemeProvider>
	)
}