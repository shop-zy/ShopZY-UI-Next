import * as React from "react";
import { Box, Typography } from "@mui/material";
import {
	Card,
	CardContent,
	CardOverflow,
	AspectRatio,
	Chip,
	Button,
} from "@mui/joy";
import Link from "@mui/joy/Link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function PopularThisWeek() {
	const popularProducts = [
		{
			id: 1,
			name: "HAVIT HV-G92 Gamepad",
			price: 120,
			originalPrice: 160,
			discount: 40,
			rating: 4.5,
			reviews: 88,
			image: "/img/gamepad.png",
			isNew: false,
		},
		{
			id: 2,
			name: "AK-900 Wired Keyboard",
			price: 960,
			originalPrice: 1160,
			discount: 35,
			rating: 4.0,
			reviews: 75,
			image: "/img/keyboard.png",
			isNew: false,
		},
		{
			id: 3,
			name: "IPS LCD Gaming Monitor",
			price: 370,
			originalPrice: 400,
			discount: 30,
			rating: 4.8,
			reviews: 99,
			image: "/img/monitor.png",
			isNew: false,
		},
		{
			id: 4,
			name: "S-Series Comfort Chair",
			price: 375,
			originalPrice: 400,
			discount: 25,
			rating: 4.2,
			reviews: 99,
			image: "/img/chair.png",
			isNew: true,
		},
	];

	return (
		<Box component="section" className="py-16">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="flex items-center gap-4 mb-6">
					<div className="w-5 h-10 bg-[#DB4444] rounded"></div>
					<Typography variant="h6" className="text-[#DB4444] font-semibold">
						This Month
					</Typography>
				</div>

				<div className="flex items-center justify-between mb-8">
					<Typography variant="h4" className="font-bold">
						Best Selling Products
					</Typography>
					<Button
						variant="solid"
						className="bg-[#DB4444] hover:bg-[#B23A3A] text-white px-8 py-2"
					>
						View All
					</Button>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{popularProducts.map((product) => (
						<Card
							key={product.id}
							sx={{
								width: "100%",
								maxWidth: "100%",
								boxShadow: "lg",
								position: "relative",
							}}
						>
							{/* Discount Badge */}
							{product.discount > 0 && (
								<div className="absolute top-3 left-3 z-10">
									<Chip
										size="sm"
										variant="solid"
										color="danger"
										sx={{ backgroundColor: "#DB4444" }}
									>
										-{product.discount}%
									</Chip>
								</div>
							)}

							{/* New Badge */}
							{product.isNew && (
								<div className="absolute top-3 left-3 z-10">
									<Chip
										size="sm"
										variant="solid"
										color="success"
										sx={{ backgroundColor: "#00FF66" }}
									>
										NEW
									</Chip>
								</div>
							)}

							{/* Wishlist & View Icons */}
							<div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
								<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100">
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
										/>
									</svg>
								</div>
								<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100">
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
								</div>
							</div>

							<CardOverflow>
								<AspectRatio sx={{ minWidth: 200 }}>
									<img
										src={product.image}
										loading="lazy"
										alt={product.name}
										className="object-contain p-4"
									/>
								</AspectRatio>
							</CardOverflow>

							<CardContent>
								<Typography variant="h6" className="mb-2 line-clamp-2">
									{product.name}
								</Typography>

								<div className="flex items-center gap-3 mb-2">
									<Typography
										variant="h6"
										className="text-[#DB4444] font-semibold"
									>
										${product.price}
									</Typography>
									{product.originalPrice > product.price && (
										<Typography
											variant="body2"
											className="text-gray-500 line-through"
										>
											${product.originalPrice}
										</Typography>
									)}
								</div>

								{/* Rating */}
								<div className="flex items-center gap-2">
									<div className="flex items-center">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className={`w-4 h-4 ${
													i < Math.floor(product.rating)
														? "text-yellow-400"
														: "text-gray-300"
												}`}
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
									<Typography variant="body2" className="text-gray-500">
										({product.reviews})
									</Typography>
								</div>
							</CardContent>

							<CardOverflow>
								<Button
									variant="solid"
									className="w-full bg-black hover:bg-gray-800 text-white"
									size="lg"
								>
									Add To Cart
								</Button>
							</CardOverflow>
						</Card>
					))}
				</div>
			</div>
		</Box>
	);
}

export default PopularThisWeek;
