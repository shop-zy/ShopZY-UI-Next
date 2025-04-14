import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Card, CardCover, CardContent, Typography } from "@mui/joy";

import styles from "./SummerCollections.module.css";

interface SummerCollectionsItemsProps {
	key: number;
	item: {
		name: string;
		description: string;
	};
}

function SummerCollections() {
	const items = [
		{
			name: "Random Name #1",
			description: "Probably the most random thing you have ever seen!",
		},
		{
			name: "Random Name #2",
			description: "Hello World!",
		},
	];
	return (
		<section id={styles["summer-collections"]}>
			<div className={styles["summary-collections-heading"]}>
				Collections We Have For You
			</div>
			<Carousel>
				{items.map((item, i) => (
					<SummerCollectionsItems key={i} item={item} />
				))}
			</Carousel>
		</section>
	);
}

function SummerCollectionsItems(props: SummerCollectionsItemsProps) {
	return (
		<Box
			component="ul"
			sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
		>
			<Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
				<CardCover>
					<img
						src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
						srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
						loading="lazy"
						alt=""
					/>
				</CardCover>
				<CardContent>
					<Typography
						level="body-lg"
						fontWeight="lg"
						textColor="#fff"
						mt={{ xs: 12, sm: 18 }}
					>
						{props.item.name}
					</Typography>
				</CardContent>
			</Card>
			<Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
				<CardCover>
					<img
						src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
						srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
						loading="lazy"
						alt=""
					/>
				</CardCover>
				<CardContent>
					<Typography
						level="body-lg"
						fontWeight="lg"
						textColor="#fff"
						mt={{ xs: 12, sm: 18 }}
					>
						{props.item.name}
					</Typography>
				</CardContent>
			</Card>
			<Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
				<CardCover>
					<img
						src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
						srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
						loading="lazy"
						alt=""
					/>
				</CardCover>
				<CardContent>
					<Typography
						level="body-lg"
						fontWeight="lg"
						textColor="#fff"
						mt={{ xs: 12, sm: 18 }}
					>
						{props.item.name}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
}

export default SummerCollections;
