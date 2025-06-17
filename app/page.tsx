"use client";
import { Stack, Typography } from "@mui/material";
import React from "react";
// import Slide from "./components/layout/Slide";
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
			imageUrl: "/img/i-phone-14-series.png", // Your actual image path
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

	return (
		<section id={styles["home-section"]}>
			{/* <Slide /> */}
			{/* <div id={styles["categories-div"]}>
				<div className={styles["categories-heading-div flex"]}>

					<Typography
						variant="h4"
						id={styles["categories-heading"]}
						component={"div"}
					>
						Categories
					</Typography>
					<Typography variant="h5" id={styles["view-all-categories"]}>
						View All
					</Typography>
				</div>
				<div className={styles["category-cards-div"]}>
					<Stack direction="row" spacing={2}>
						<Card
							sx={{
								width: 150,
							}}
						>
							<div className={styles["card-icon-div"]}>
								<img
									className={styles["card-icon"]}
									src="/img/category-jacket-img.svg"
									// srcSet="/img/category-jacket-img.svg"
									loading="lazy"
									alt="My Shoe Icon"
								/>
							</div>
						</Card>
						<Card
							sx={{
								width: 150,
							}}
						>
							<div className={styles["card-icon-div"]}>
								<img
									className={styles["card-icon"]}
									src="/img/Vectorcategory-shoe-test.svg"
									// srcSet="/img/Vectorcategory-shoe-test.svg"
									loading="lazy"
									alt="My Shoe Icon"
								/>
							</div>
						</Card>
						<Card
							sx={{
								width: 150,
							}}
						>
							<div className={styles["card-icon-div"]}>
								<img
									className={styles["card-icon"]}
									src="/img/Vectorcategory-shoe-test.svg"
									// srcSet="/img/Vectorcategory-shoe-test.svg"
									loading="lazy"
									alt="My Shoe Icon"
								/>
							</div>
						</Card>
						<Card
							sx={{
								width: 150,
							}}
						>
							<div className={styles["card-icon-div"]}>
								<img
									className={styles["card-icon"]}
									src="/img/Vectorcategory-shoe-test.svg"
									// srcSet="/img/Vectorcategory-shoe-test.svg"
									loading="lazy"
									alt="My Shoe Icon"
								/>
							</div>
						</Card>
						<Card
							sx={{
								width: 150,
							}}
						>
							<div className={styles["card-icon-div"]}>
								<img
									className={styles["card-icon"]}
									src="/img/Vectorcategory-shoe-test.svg"
									// srcSet="/img/Vectorcategory-shoe-test.svg"
									loading="lazy"
									alt="My Shoe Icon"
								/>
							</div>
						</Card>
						<Card
							sx={{
								width: 150,
							}}
						>
							<div className={styles["card-icon-div"]}>
								<img
									className={styles["card-icon"]}
									src="/img/Vectorcategory-shoe-test.svg"
									// srcSet="/img/Vectorcategory-shoe-test.svg"
									loading="lazy"
									alt="My Shoe Icon"
								/>
							</div>
						</Card>
					</Stack>
				</div>
			</div> */}
			{/* Main container with sidebar and content */}
			<div className="container mx-auto px-4 py-6">
				<div className="flex gap-6">
					{/* Sidebar */}
					<aside className="w-64 flex-shrink-0">
						<div className="bg-white rounded-lg shadow-sm p-4">
							<ul className="space-y-3">
								{sidebarCategories.map((category, index) => (
									<li key={index} className="flex items-center justify-between">
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

						{/* Other sections would go here */}
						<section className="bg-white rounded-lg shadow-sm p-6">
							<h2 className="text-xl font-semibold mb-4">Featured Products</h2>
							{/* Your other content */}
						</section>
					</main>
				</div>
			</div>
			<div id={styles["categories-div"]}>
				<div className={styles["categories-heading-div flex"]}>
					<Typography
						variant="h4"
						id={styles["categories-heading"]}
						component={"div"}
					>
						New Arrivals
					</Typography>
					<Typography variant="h5" id={styles["view-all-categories"]}>
						View All
					</Typography>
				</div>
				<div className={styles["new-arrivals-card-div"]}>
					<NewArrivals />
				</div>
			</div>
			<Featured />
			<SummerCollections />
			<PopularThisWeek />
			<Footer />
		</section>
	);
}
