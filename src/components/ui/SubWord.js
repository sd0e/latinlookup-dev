import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { RemoveCircleOutline, SubdirectoryArrowRight } from '@material-ui/icons';

const CustomButton = withStyles({
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
	},
	label: {
		textTransform: "uppercase",
		letterSpacing: "0.15rem",
		fontFamily: "Inter, sans-serif",
		fontWeight: 600,
		lineHeight: "1rem",
		verticalAlign: "middle"
	}
})(props => <Button {...props} />);

const CustomIconButton = withStyles({
	root: {
		transition: "0.1s ease-in-out",
		cursor: "pointer",
		color: "rgba(242, 242, 242, 0.8)",
		justifySelf: "flex-end",
	}
})(props => <IconButton {...props} />);

export default function SubWord({ Word, Selected, Click }) {
	const id = `word-${Word}`;

	return (
		<CustomButton style={Selected ? { backgroundColor: "rgba(102, 102, 102, 0.1)" } : null} id={id} onClick={Click}>
			<div style={{ display: "flex", alignItems: "center" }} id={id}>
				<SubdirectoryArrowRight fontSize="small" style={{ marginRight: "0.5rem" }} id={id} />
				{Word.substr(1)}
			</div>
			{/* <CustomIconButton aria-label="remove" size="small" id={id}>
				<RemoveCircleOutline fontSize="inherit" id={id} />
			</CustomIconButton> */}
		</CustomButton>
	)
}