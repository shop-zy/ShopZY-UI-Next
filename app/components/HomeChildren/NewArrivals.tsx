import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { AspectRatio, CardOverflow } from "@mui/joy";

function NewArrivals() {
	const newArrivalsData = [
		{
			id: 1,
			title: "PlayStation 5",
			subtitle: "Black and White version of the PS5 coming out on sale.",
			image: "/img/ps5.png",
			link: "/products/ps5",
			featured: true,
		},
		{
			id: 2,
			title: "Women's Collections",
			subtitle: "Featured woman collections that give you another vibe.",
			image: "/img/womens-collection.png",
			link: "/products/womens-collections",
			featured: false,
		},
		{
			id: 3,
			title: "Speakers",
			subtitle: "Amazon wireless speakers",
			image: "/img/speakers.png",
			link: "/products/speakers",
			featured: false,
		},
		{
			id: 4,
			title: "Perfume",
			subtitle: "GUCCI INTENSE OUD EDP",
			image: "/img/perfume.png",
			link: "/products/perfume",
			featured: false,
		},
	];

	return (
		<Box component={"section"} className="container mx-auto px-4">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Left side - Featured Product (PS5) */}
				<Card
					sx={{
						width: "100%",
						height: 600,
						position: "relative",
						backgroundColor: "#000000",
						color: "white",
						borderRadius: "4px",
						overflow: "hidden",
					}}
				>
					<CardOverflow>
						<div className="relative h-full w-full flex items-end">
							<img
								src={newArrivalsData[0].image}
								alt={newArrivalsData[0].title}
								className="absolute inset-0 w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
							<CardContent sx={{ position: "relative", zIndex: 1, p: 4 }}>
								<Typography
									level="h2"
									sx={{
										color: "white",
										fontWeight: "600",
										fontSize: "24px",
										lineHeight: "24px",
										mb: 2,
									}}
								>
									{newArrivalsData[0].title}
								</Typography>
								<Typography
									level="body-md"
									sx={{
										color: "white",
										fontSize: "14px",
										lineHeight: "21px",
										mb: 2,
										maxWidth: "242px",
									}}
								>
									{newArrivalsData[0].subtitle}
								</Typography>
								<Button
									variant="plain"
									sx={{
										color: "white",
										textDecoration: "underline",
										p: 0,
										minHeight: "auto",
										fontSize: "16px",
										fontWeight: "500",
										"&:hover": {
											backgroundColor: "transparent",
											textDecoration: "underline",
										},
									}}
								>
									Shop Now
								</Button>
							</CardContent>
						</div>
					</CardOverflow>
				</Card>

				{/* Right side - Grid of 3 products */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Women's Collections - Top Right */}
					<Card
						sx={{
							width: "100%",
							height: 284,
							position: "relative",
							backgroundColor: "#0D0D0D",
							color: "white",
							borderRadius: "4px",
							overflow: "hidden",
							gridColumn: { md: "span 2" },
						}}
					>
						<CardOverflow>
							<div className="relative h-full w-full flex items-end">
								<img
									src={newArrivalsData[1].image}
									alt={newArrivalsData[1].title}
									className="absolute inset-0 w-full h-full object-cover object-right"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
								<CardContent sx={{ position: "relative", zIndex: 1, p: 3 }}>
									<Typography
										level="h3"
										sx={{
											color: "white",
											fontWeight: "600",
											fontSize: "24px",
											lineHeight: "24px",
											mb: 2,
										}}
									>
										{newArrivalsData[1].title}
									</Typography>
									<Typography
										level="body-sm"
										sx={{
											color: "white",
											fontSize: "14px",
											lineHeight: "21px",
											mb: 2,
											maxWidth: "255px",
										}}
									>
										{newArrivalsData[1].subtitle}
									</Typography>
									<Button
										variant="plain"
										sx={{
											color: "white",
											textDecoration: "underline",
											p: 0,
											minHeight: "auto",
											fontSize: "16px",
											fontWeight: "500",
											"&:hover": {
												backgroundColor: "transparent",
												textDecoration: "underline",
											},
										}}
									>
										Shop Now
									</Button>
								</CardContent>
							</div>
						</CardOverflow>
					</Card>

					{/* Speakers - Bottom Left */}
					<Card
						sx={{
							width: "100%",
							height: 284,
							position: "relative",
							backgroundColor: "#000000",
							color: "white",
							borderRadius: "4px",
							overflow: "hidden",
						}}
					>
						<CardOverflow>
							<div className="relative h-full w-full flex items-end">
								<img
									src={newArrivalsData[2].image}
									alt={newArrivalsData[2].title}
									className="absolute inset-0 w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
								<CardContent sx={{ position: "relative", zIndex: 1, p: 3 }}>
									<Typography
										level="h4"
										sx={{
											color: "white",
											fontWeight: "600",
											fontSize: "24px",
											lineHeight: "24px",
											mb: 1,
										}}
									>
										{newArrivalsData[2].title}
									</Typography>
									<Typography
										level="body-sm"
										sx={{
											color: "white",
											fontSize: "14px",
											lineHeight: "21px",
											mb: 2,
										}}
									>
										{newArrivalsData[2].subtitle}
									</Typography>
									<Button
										variant="plain"
										sx={{
											color: "white",
											textDecoration: "underline",
											p: 0,
											minHeight: "auto",
											fontSize: "16px",
											fontWeight: "500",
											"&:hover": {
												backgroundColor: "transparent",
												textDecoration: "underline",
											},
										}}
									>
										Shop Now
									</Button>
								</CardContent>
							</div>
						</CardOverflow>
					</Card>

					{/* Perfume - Bottom Right */}
					<Card
						sx={{
							width: "100%",
							height: 284,
							position: "relative",
							backgroundColor: "#000000",
							color: "white",
							borderRadius: "4px",
							overflow: "hidden",
						}}
					>
						<CardOverflow>
							<div className="relative h-full w-full flex items-end">
								<img
									src={newArrivalsData[3].image}
									alt={newArrivalsData[3].title}
									className="absolute inset-0 w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
								<CardContent sx={{ position: "relative", zIndex: 1, p: 3 }}>
									<Typography
										level="h4"
										sx={{
											color: "white",
											fontWeight: "600",
											fontSize: "24px",
											lineHeight: "24px",
											mb: 1,
										}}
									>
										{newArrivalsData[3].title}
									</Typography>
									<Typography
										level="body-sm"
										sx={{
											color: "white",
											fontSize: "14px",
											lineHeight: "21px",
											mb: 2,
										}}
									>
										{newArrivalsData[3].subtitle}
									</Typography>
									<Button
										variant="plain"
										sx={{
											color: "white",
											textDecoration: "underline",
											p: 0,
											minHeight: "auto",
											fontSize: "16px",
											fontWeight: "500",
											"&:hover": {
												backgroundColor: "transparent",
												textDecoration: "underline",
											},
										}}
									>
										Shop Now
									</Button>
								</CardContent>
							</div>
						</CardOverflow>
					</Card>
				</div>
			</div>
		</Box>
	);
}

export default NewArrivals;
