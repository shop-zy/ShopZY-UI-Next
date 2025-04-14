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
import { Box } from "@mui/material";

function Featured() {
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

	return (
		<Box component={"section"} className="m-9">
			<Box component={"div"} className="flex flex-row justify-between">
				<Typography
					level="h4"
					className="text-primary-color font-family-heading text-size-heading font-weight-heading"
				>
					Featured
				</Typography>
				<Typography level="body-lg" id="view-all-categories">
					View All
				</Typography>
			</Box>
			<Box
				component={"div"}
				className="flex flex-column flex-wrap justify-center items-center gap-2 mt-2"
			>
				{
					// Featured Product Card
					featuredProductArray.map((product, index) => (
						<Card
							key={index}
							sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
						>
							<CardOverflow>
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
								<Typography level="body-xs">{product.productName}</Typography>
								<Link
									href="/product-details"
									color="neutral"
									textColor="text.primary"
									overlay
									endDecorator={<ArrowOutwardIcon />}
									sx={{ fontWeight: "md" }}
								>
									{product.productNameLink}
								</Link>

								<Typography
									level="title-lg"
									sx={{ mt: 1, fontWeight: "xl" }}
									className="text-primary-color"
									endDecorator={
										<Chip
											component="span"
											size="sm"
											variant="soft"
											color="success"
										>
											{product.productChip}
										</Chip>
									}
								>
									{product.productPrice}
								</Typography>
								<Typography level="body-sm">
									(Only <b>{product.productStock}</b> left in stock!)
								</Typography>
							</CardContent>
							<CardOverflow>
								<Button
									variant="solid"
									className="bg-primary-color btn"
									size="lg"
								>
									Add to cart
								</Button>
							</CardOverflow>
						</Card>
					))
				}
			</Box>
		</Box>
	);
}

export default Featured;
