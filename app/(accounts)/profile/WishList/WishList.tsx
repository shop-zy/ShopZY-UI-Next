"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React, { useState } from "react";

import DeleteIcon from "../../../../public/img/delete-icon.svg";

function WishList() {
	const featuredProductArray = [
		{
			productName: "Bluetooth Headset",
			productImage:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
			productImageSrcSet:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x",
			productLink: "#product-card",
			productNameLink: "Super Rockez A400",
			productChip: "Lowest price",
			productPrice: "2,900 $",
			productStock: 7,
		},
		{
			productName: "Bluetooth Headset",
			productImage:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
			productImageSrcSet:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x",
			productLink: "#product-card",
			productNameLink: "Super Rockez A400",
			productChip: "Lowest price",
			productPrice: "2,900 $",
			productStock: 7,
		},
		{
			productName: "Bluetooth Headset",
			productImage:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
			productImageSrcSet:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x",
			productLink: "#product-card",
			productNameLink: "Super Rockez A400",
			productChip: "Lowest price",
			productPrice: "2,900 $",
			productStock: 7,
		},
		{
			productName: "Bluetooth Headset",
			productImage:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
			productImageSrcSet:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x",
			productLink: "#product-card",
			productNameLink: "Super Rockez A400",
			productChip: "Lowest price",
			productPrice: "2,900 $",
			productStock: 7,
		},
		{
			productName: "Bluetooth Headset",
			productImage:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
			productImageSrcSet:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x",
			productLink: "#product-card",
			productNameLink: "Super Rockez A400",
			productChip: "Lowest price",
			productPrice: "2,900 $",
			productStock: 7,
		},
		{
			productName: "Bluetooth Headset",
			productImage:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
			productImageSrcSet:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x",
			productLink: "#product-card",
			productNameLink: "Super Rockez A400",
			productChip: "Lowest price",
			productPrice: "2,900 $",
			productStock: 7,
		},
		{
			productName: "Bluetooth Headset",
			productImage:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
			productImageSrcSet:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x",
			productLink: "#product-card",
			productNameLink: "Super Rockez A400",
			productChip: "Lowest price",
			productPrice: "2,900 $",
			productStock: 7,
		},
		{
			productName: "Bluetooth Headset",
			productImage:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
			productImageSrcSet:
				"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x",
			productLink: "#product-card",
			productNameLink: "Super Rockez A400",
			productChip: "Lowest price",
			productPrice: "2,900 $",
			productStock: 7,
		},
	];
	// State to manage visibility of extra items
	const [showAll, setShowAll] = useState(false);

	// Function to toggle visibility
	const toggleShowAll = () => {
		setShowAll((prevShowAll) => !prevShowAll);
	};

	// Determine the items to display
	const itemsToDisplay = showAll
		? featuredProductArray
		: featuredProductArray.slice(0, 4);

	return (
		<Box component={"section"} className="m-10">
			<Stack
				direction="row"
				justifyContent={"space-between"}
				alignItems={"center"}
				spacing={2}
				className="m-10"
			>
				<Typography className="text-[20px] poppins-regular">
					Wishlist (4)
				</Typography>
				<Button
					variant="outlined"
					className="text-[16px] text-capitalise poppins-medium btn text-black-color"
				>
					Move All To Bag
				</Button>
			</Stack>
			<Box
				component={"div"}
				className="flex flex-column flex-wrap justify-center items-center gap-2 mt-2"
			>
				{itemsToDisplay.map((product, index: number) => (
					<Card
						key={index}
						sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
					>
						<CardOverflow>
							<div className="block-icon">
								<img className="icon-tag" src={DeleteIcon} alt="Delete Icon" />
							</div>
							{/* <DeleteIcon /> */}
							<AspectRatio sx={{ minWidth: 200 }}>
								<img
									src={product.productImage}
									srcSet={product.productImageSrcSet}
									loading="lazy"
									alt="My Featured Product"
								/>
							</AspectRatio>
						</CardOverflow>
						<CardContent>
							<Typography variant="body1">{product.productName}</Typography>
							<Link
								href="#product-card"
								color="neutral"
								textColor="text.primary"
								overlay
								endDecorator={<ArrowOutwardIcon />}
								sx={{ fontWeight: "md" }}
							>
								{product.productNameLink}
							</Link>
							<Box
								sx={{ mt: 1, fontWeight: "xl" }}
								className="text-primary-color"
							>
								<Typography variant="h6">{product.productPrice}</Typography>
								<Chip
									component="span"
									size="sm"
									variant="soft"
									color="success"
									sx={{ ml: 1 }}
								>
									{product.productChip}
								</Chip>
							</Box>
							<Typography variant="body2">
								(Only <b>{product.productStock}</b> left in stock!)
							</Typography>
						</CardContent>
						<CardOverflow
							sx={{ padding: "0 !important", width: "100% !important" }}
						>
							<Button
								variant="contained"
								className="btn-black btn text-white-color"
								size="small"
								startIcon={<ShoppingCartOutlinedIcon />}
							>
								Add to cart
							</Button>
						</CardOverflow>
					</Card>
				))}
			</Box>
			<Box className="flex justify-end m-4">
				<Button
					onClick={toggleShowAll}
					variant="text"
					className="text-[16px] text-capitalise poppins-medium text-primary-color"
				>
					{showAll ? "View Less" : "View All"}
				</Button>
			</Box>
		</Box>
	);
}

export default WishList;
