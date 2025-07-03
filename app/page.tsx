"use client";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { Card } from "@mui/joy";

// custom CSS
import styles from "./home.module.css";

// Custom Components
import NewArrivals from "./components/HomeChildren/NewArrivals";
import SummerCollections from "./components/HomeChildren/SummerCollections";
import Footer from "./components/layout/Footer";
import PopularThisWeek from "./components/HomeChildren/PopularThisWeek";
import Featured from "./components/HomeChildren/Featured";
import Carousel, { CarouselSlide } from "./components/common/Carousel";

export default function Home() {
	const carouselSlides: CarouselSlide[] = [
		{
			id: "1",
			title: "Up to 10% off Voucher",
			subtitle: "iPhone 14 Series",
			description:
				"Get the latest iPhone with amazing discounts and exclusive offers.",
			linkText: "Shop Now",
			linkUrl: "/products/iphone-14",
			imageUrl: "/img/i-phone-14-series.png",
			imageAlt: "iPhone 14 Series in Purple",
		},
		{
			id: "2",
			title: "Special Offer",
			subtitle: "MacBook Air M2",
			description: "Ultra-thin, incredibly powerful with the M2 chip.",
			linkText: "Explore",
			linkUrl: "/products/macbook-air",
			imageUrl: "/assets/macbook-air.png",
			imageAlt: "MacBook Air M2",
		},
		{
			id: "3",
			title: "New Release",
			subtitle: "Apple Watch Series 9",
			description:
				"The most advanced Apple Watch yet with new health features.",
			linkText: "Discover",
			linkUrl: "/products/apple-watch",
			imageUrl: "/assets/apple-watch-series-9.png",
			imageAlt: "Apple Watch Series 9",
		},
	];

	const sidebarCategories = [
		{ name: "Woman's Fashion", hasSubmenu: true },
		{ name: "Men's Fashion", hasSubmenu: true },
		{ name: "Electronics", hasSubmenu: false },
		{ name: "Home & Lifestyle", hasSubmenu: false },
		{ name: "Medicine", hasSubmenu: false },
		{ name: "Sports & Outdoor", hasSubmenu: false },
		{ name: "Baby's & Toys", hasSubmenu: false },
		{ name: "Groceries & Pets", hasSubmenu: false },
		{ name: "Health & Beauty", hasSubmenu: false },
	];

	const categoryCards = [
		{
			name: "Phones",
			icon: "/img/category-phone.svg",
			link: "/category/phones",
		},
		{
			name: "Computers",
			icon: "/img/category-computer.svg",
			link: "/category/computers",
		},
		{
			name: "SmartWatch",
			icon: "/img/category-smartwatch.svg",
			link: "/category/smartwatch",
		},
		{
			name: "Camera",
			icon: "/img/category-camera.svg",
			link: "/category/camera",
		},
		{
			name: "HeadPhones",
			icon: "/img/category-headphones.svg",
			link: "/category/headphones",
		},
		{
			name: "Gaming",
			icon: "/img/category-gaming.svg",
			link: "/category/gaming",
		},
	];

	return (
		<section id={styles["home-section"]}>
			{/* Hero Section with Sidebar and Carousel */}
			<div className="container mx-auto px-4 py-6">
				<div className="flex gap-6">
					{/* Sidebar */}
					<aside className="w-64 flex-shrink-0">
						<div className="bg-white rounded-lg shadow-sm p-4">
							<ul className="space-y-3">
								{sidebarCategories.map((category, index) => (
									<li
										key={index}
										className="flex items-center justify-between hover:bg-gray-50 p-2 rounded cursor-pointer"
									>
										<span className="text-sm text-gray-700">
											{category.name}
										</span>
										{category.hasSubmenu && (
											<svg
												className="w-4 h-4 text-gray-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 5l7 7-7 7"
												/>
											</svg>
										)}
									</li>
								))}
							</ul>
						</div>
					</aside>

					{/* Main content area */}
					<main className="flex-1">
						{/* Carousel Section */}
						<section className="mb-8">
							<div className="h-[350px] lg:h-[400px]">
								<Carousel
									slides={carouselSlides}
									autoSlide={true}
									autoSlideInterval={4000}
								/>
							</div>
						</section>
					</main>
				</div>
			</div>

			{/* Categories Section */}
			<div id={styles["categories-div"]}>
				<div className={styles["categories-heading-div"]}>
					<Typography
						variant="h4"
						id={styles["categories-heading"]}
						component={"div"}
					>
						Browse By Category
					</Typography>
					<Typography variant="h5" id={styles["view-all-categories"]}>
						View All
					</Typography>
				</div>
				<div className={styles["category-cards-div"]}>
					<Stack direction="row" spacing={2} className="overflow-x-auto">
						{categoryCards.map((category, index) => (
							<Card
								key={index}
								sx={{
									width: 170,
									minWidth: 170,
									height: 145,
									cursor: "pointer",
									border: "1px solid #e0e0e0",
									"&:hover": {
										backgroundColor: "#DB4444",
										color: "white",
										"& .category-icon": {
											filter: "brightness(0) invert(1)",
										},
									},
								}}
							>
								<div className={styles["card-icon-div"]}>
									<img
										className={`${styles["card-icon"]} category-icon`}
										src={category.icon}
										loading="lazy"
										alt={`${category.name} Icon`}
									/>
									<Typography variant="body2" className="mt-2 text-center">
										{category.name}
									</Typography>
								</div>
							</Card>
						))}
					</Stack>
				</div>
			</div>

			{/* Flash Sales Section */}
			<div id={styles["categories-div"]}>
				<div className={styles["categories-heading-div"]}>
					<div className="flex items-center gap-4">
						<div className="w-5 h-10 bg-[#DB4444] rounded"></div>
						<Typography variant="h6" className="text-[#DB4444] font-semibold">
							Today's
						</Typography>
					</div>
				</div>
				<div className="flex items-center gap-6 mb-4">
					<Typography
						variant="h4"
						id={styles["categories-heading"]}
						component={"div"}
					>
						Flash Sales
					</Typography>
					{/* Countdown Timer */}
					<div className="flex items-center gap-4">
						<div className="flex flex-col items-center">
							<Typography variant="body2" className="text-black">
								Days
							</Typography>
							<Typography variant="h5" className="font-bold">
								03
							</Typography>
						</div>
						<Typography variant="h5" className="text-[#DB4444]">
							:
						</Typography>
						<div className="flex flex-col items-center">
							<Typography variant="body2" className="text-black">
								Hours
							</Typography>
							<Typography variant="h5" className="font-bold">
								23
							</Typography>
						</div>
						<Typography variant="h5" className="text-[#DB4444]">
							:
						</Typography>
						<div className="flex flex-col items-center">
							<Typography variant="body2" className="text-black">
								Minutes
							</Typography>
							<Typography variant="h5" className="font-bold">
								19
							</Typography>
						</div>
						<Typography variant="h5" className="text-[#DB4444]">
							:
						</Typography>
						<div className="flex flex-col items-center">
							<Typography variant="body2" className="text-black">
								Seconds
							</Typography>
							<Typography variant="h5" className="font-bold">
								56
							</Typography>
						</div>
					</div>
				</div>
				<Featured />
			</div>

			{/* New Arrivals Section */}
			<div id={styles["categories-div"]}>
				<div className={styles["categories-heading-div"]}>
					<div className="flex items-center gap-4">
						<div className="w-5 h-10 bg-[#DB4444] rounded"></div>
						<Typography variant="h6" className="text-[#DB4444] font-semibold">
							Featured
						</Typography>
					</div>
				</div>
				<Typography
					variant="h4"
					id={styles["categories-heading"]}
					component={"div"}
					className="mb-4"
				>
					New Arrivals
				</Typography>
				<NewArrivals />
			</div>

			{/* Other Sections */}
			<SummerCollections />
			<PopularThisWeek />

			{/* Services Section */}
			<div className="bg-white py-16">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
								<svg
									className="w-8 h-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
									/>
								</svg>
							</div>
							<Typography variant="h6" className="font-semibold mb-2">
								FREE AND FAST DELIVERY
							</Typography>
							<Typography variant="body2" className="text-gray-600">
								Free delivery for all orders over $140
							</Typography>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
								<svg
									className="w-8 h-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								</svg>
							</div>
							<Typography variant="h6" className="font-semibold mb-2">
								24/7 CUSTOMER SERVICE
							</Typography>
							<Typography variant="body2" className="text-gray-600">
								Friendly 24/7 customer support
							</Typography>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
								<svg
									className="w-8 h-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<Typography variant="h6" className="font-semibold mb-2">
								MONEY BACK GUARANTEE
							</Typography>
							<Typography variant="body2" className="text-gray-600">
								We return money within 30 days
							</Typography>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</section>
	);
}
