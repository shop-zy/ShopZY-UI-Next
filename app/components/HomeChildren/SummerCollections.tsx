import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Card, CardCover, CardContent } from "@mui/joy";
import { Typography, Button } from "@mui/material";

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
			<Box component="section" className="py-16 bg-black text-white">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						{/* Left side - Text Content */}
						<div className="space-y-6">
							<Typography variant="h6" className="text-green-400 font-semibold">
								Categories
							</Typography>
							<Typography
								variant="h2"
								className="text-4xl lg:text-5xl font-bold leading-tight"
							>
								Enhance Your Music Experience
							</Typography>

							{/* Countdown Timer */}
							<div className="flex gap-4">
								<div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
									<Typography variant="body2" className="text-xs font-semibold">
										23
									</Typography>
									<Typography variant="caption" className="text-xs">
										Hours
									</Typography>
								</div>
								<div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
									<Typography variant="body2" className="text-xs font-semibold">
										05
									</Typography>
									<Typography variant="caption" className="text-xs">
										Days
									</Typography>
								</div>
								<div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
									<Typography variant="body2" className="text-xs font-semibold">
										59
									</Typography>
									<Typography variant="caption" className="text-xs">
										Minutes
									</Typography>
								</div>
								<div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
									<Typography variant="body2" className="text-xs font-semibold">
										35
									</Typography>
									<Typography variant="caption" className="text-xs">
										Seconds
									</Typography>
								</div>
							</div>

							<Button
								variant="contained"
								className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md"
								size="large"
							>
								Buy Now!
							</Button>
						</div>

						{/* Right side - Product Image */}
						<div className="flex justify-center">
							<div className="relative">
								<div className="w-80 h-80 bg-gray-800 rounded-full flex items-center justify-center">
									<img
										src="/img/jbl-speaker.png"
										alt="JBL Speaker"
										className="w-64 h-64 object-contain"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Box>
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
						variant="caption"
						sx={{
							fontWeight: "bold",
							color: "#fff",
							mt: { xs: 12, sm: 18 },
						}}
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
						variant="caption"
						sx={{
							fontWeight: "bold",
							color: "#fff",
							mt: { xs: 12, sm: 18 },
						}}
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
						variant="caption"
						sx={{
							fontWeight: "bold",
							color: "#fff",
							mt: { xs: 12, sm: 18 },
						}}
					>
						{props.item.name}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
}

export default SummerCollections;
