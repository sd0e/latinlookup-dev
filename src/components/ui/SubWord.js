import React from 'react';
import { Button, IconButton, ThemeProvider, createTheme } from '@mui/material';
import { RemoveCircleOutline, SubdirectoryArrowRight } from '@mui/icons-material';

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

export default function SubWord({ Word, Selected, Click }) {
	const id = `word-${Word}`;

	return (
		<ThemeProvider theme={theme}>
			<Button style={Selected ? { backgroundColor: "rgba(102, 102, 102, 0.1)" } : null} id={id} onClick={Click}>
				<div style={{ display: "flex", alignItems: "center" }} id={id}>
					<SubdirectoryArrowRight fontSize="small" style={{ marginRight: "0.5rem" }} id={id} />
					{Word.substr(1)}
				</div>
				<IconButton aria-label="remove" size="small" id={id}>
					<RemoveCircleOutline fontSize="inherit" id={id} />
				</IconButton>
			</Button>
		</ThemeProvider>
	)
}