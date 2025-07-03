import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Featured() {
	const featuredProductArray = [
		{
			productName: "HAVIT HV-G92 Gamepad",
			productImage: "/img/gamepad.png",
			productLink: "#product-card",
			productNameLink: "HAVIT HV-G92 Gamepad",
			productChip: "-40%",
			productPrice: "$120",
			originalPrice: "$160",
			productStock: 88,
			rating: 4.5,
			reviews: 88,
		},
		{
			productName: "AK-900 Wired Keyboard",
			productImage: "/img/keyboard.png",
			productLink: "#product-card",
			productNameLink: "AK-900 Wired Keyboard",
			productChip: "-35%",
			productPrice: "$960",
			originalPrice: "$1160",
			productStock: 75,
			rating: 4.0,
			reviews: 75,
		},
		{
			productName: "IPS LCD Gaming Monitor",
			productImage: "/img/monitor.png",
			productLink: "#product-card",
			productNameLink: "IPS LCD Gaming Monitor",
			productChip: "-30%",
			productPrice: "$370",
			originalPrice: "$400",
			productStock: 99,
			rating: 4.8,
			reviews: 99,
		},
		{
			productName: "S-Series Comfort Chair",
			productImage: "/img/chair.png",
			productLink: "#product-card",
			productNameLink: "S-Series Comfort Chair",
			productChip: "-25%",
			productPrice: "$375",
			originalPrice: "$400",
			productStock: 99,
			rating: 4.2,
			reviews: 99,
		},
	];

	return (
		<Box component={"section"} className="container mx-auto px-4">
			{/* Products Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{featuredProductArray.map((product, index) => (
					<Card
						key={index}
						sx={{
							width: "100%",
							maxWidth: "100%",
							boxShadow: "lg",
							position: "relative",
							bgcolor: "white",
							borderRadius: "4px",
							overflow: "hidden",
						}}
					>
						{/* Discount Badge */}
						<div className="absolute top-3 left-3 z-10">
							<Chip
								size="sm"
								variant="solid"
								color="danger"
								sx={{
									backgroundColor: "#DB4444",
									color: "white",
									fontSize: "12px",
									fontWeight: "400",
								}}
							>
								{product.productChip}
							</Chip>
						</div>

						{/* Wishlist & View Icons */}
						<div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
							<IconButton
								size="small"
								sx={{
									width: 34,
									height: 34,
									backgroundColor: "white",
									"&:hover": { backgroundColor: "#DB4444", color: "white" },
								}}
							>
								<FavoriteBorderIcon fontSize="small" />
							</IconButton>
							<IconButton
								size="small"
								sx={{
									width: 34,
									height: 34,
									backgroundColor: "white",
									"&:hover": { backgroundColor: "#DB4444", color: "white" },
								}}
							>
								<VisibilityIcon fontSize="small" />
							</IconButton>
						</div>

						<CardOverflow>
							<AspectRatio sx={{ minWidth: 200, height: 180 }}>
								<img
									src={product.productImage}
									loading="lazy"
									alt={product.productName}
									className="object-contain p-4"
								/>
							</AspectRatio>
						</CardOverflow>

						<CardContent sx={{ p: 2 }}>
							<Typography
								level="title-md"
								sx={{
									mb: 1,
									fontWeight: "500",
									fontSize: "16px",
									color: "#000000",
									lineHeight: "24px",
								}}
							>
								{product.productNameLink}
							</Typography>

							<div className="flex items-center gap-3 mb-2">
								<Typography
									level="title-lg"
									sx={{
										color: "#DB4444",
										fontWeight: "500",
										fontSize: "16px",
									}}
								>
									{product.productPrice}
								</Typography>
								<Typography
									level="body-sm"
									sx={{
										color: "#000000",
										textDecoration: "line-through",
										opacity: 0.5,
										fontSize: "16px",
									}}
								>
									{product.originalPrice}
								</Typography>
							</div>

							{/* Rating */}
							<div className="flex items-center gap-2 mb-3">
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
								<Typography
									level="body-sm"
									sx={{
										color: "#000000",
										opacity: 0.5,
										fontSize: "14px",
									}}
								>
									({product.reviews})
								</Typography>
							</div>
						</CardContent>

						<CardOverflow>
							<Button
								variant="solid"
								sx={{
									width: "100%",
									backgroundColor: "#000000",
									color: "white",
									borderRadius: "0",
									"&:hover": {
										backgroundColor: "#DB4444",
									},
									py: 1.5,
									fontSize: "16px",
									fontWeight: "500",
								}}
								size="lg"
							>
								Add To Cart
							</Button>
						</CardOverflow>
					</Card>
				))}
			</div>
		</Box>
	);
}

export default Featured;
