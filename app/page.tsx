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

export default function Home() {
	return (
		<section id={styles["home-section"]}>
			{/* <Slide /> */}
			<div id={styles["categories-div"]}>
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
