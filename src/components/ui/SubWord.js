import React from 'react';
import { Button, IconButton, ThemeProvider, createTheme } from '@mui/material';
import { RemoveCircleOutline, SubdirectoryArrowRight } from '@mui/icons-material';

import GetColorVariable from '../../scripts/GetColorVariable';
import GetColorMode from '../../scripts/GetColorMode';

export default function SubWord({ Word, Selected, Click, removeWord, refresh }) {
	const id = `word-${Word}`;

	const theme = createTheme({
		palette: {
			mode: GetColorMode(document),
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
						color: GetColorVariable(document, '--muted-text'),
						justifyContent: "space-between",
						marginBottom: "0.5rem",
						textTransform: "uppercase",
						letterSpacing: "0.15rem",
						fontFamily: "Inter, sans-serif",
						fontWeight: 600,
					},
				},
			},
			MuiIconButton: {
				styleOverrides: {
					root: {
						width: '2rem',
						height: '2rem'
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Button style={Selected ? { backgroundColor: "rgba(102, 102, 102, 0.1)" } : null} id={id} onClick={Click} fullWidth>
					<div style={{ display: "flex", alignItems: "center" }} id={id} key={`word-${refresh}`}>
						<SubdirectoryArrowRight fontSize="small" style={{ marginRight: "0.5rem" }} id={id} key={`subdirectory-${refresh}`} />
						{Word.substr(1)}
					</div>
				</Button>
				<IconButton aria-label="remove" size="small" id={id} onClick={() => removeWord(Word)}>
					<RemoveCircleOutline fontSize="inherit" id={id} key={`icon-${refresh}`} />
				</IconButton>
			</div>
		</ThemeProvider>
	)
}