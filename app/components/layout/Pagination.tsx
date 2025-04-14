import React, { CSSProperties } from "react";
import PropTypes from "prop-types";
import PaginationDot from "./PaginationDot";

const styles: { root: CSSProperties } = {
	root: {
		position: "absolute",
		bottom: 8,
		right: 8,
		display: "flex",
		flexDirection: "row",
	},
};

interface PaginationProps {
	dots: number;
	index: number;
	onChangeIndex: (index: number) => void;
}

function Pagination(props: PaginationProps) {
	const { index, dots } = props;

	const handleClick = (
		event: React.MouseEvent<HTMLDivElement>,
		index: number
	) => {
		props.onChangeIndex(index);
	};

	const children = [];
	for (let i = 0; i < dots; i++) {
		children.push(
			<PaginationDot
				key={i}
				index={i}
				active={i === index}
				onClick={handleClick}
			/>
		);
	}

	return <div style={styles.root}>{children}</div>;
}

Pagination.propTypes = {
	dots: PropTypes.number.isRequired,
	index: PropTypes.number.isRequired,
	onChangeIndex: PropTypes.func.isRequired,
};

export default Pagination;
