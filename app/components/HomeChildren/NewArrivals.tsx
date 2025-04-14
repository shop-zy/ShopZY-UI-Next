import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

import styles from "./NewArrivals.module.css";

function NewArrivals() {
	return (
		<Box component="ul" className={styles["card-box"]}>
			<Card sx={{ width: 250 }}>
				<div>
					<Typography level="title-lg" textAlign={"center"}>
						Yosemite National Park
					</Typography>
				</div>
				<CardContent
					className={styles["card-content"]}
					orientation="horizontal"
				>
					<img
						src="/img/img_businessshirt.png"
						style={{
							height: "150px",
							width: "150px",
						}}
						loading="lazy"
						alt=""
					/>
					<div className={styles["card-details"]}>
						<Box>
							<Typography level="body-xs">Total price:</Typography>
							<Typography fontSize="lg" fontWeight="lg">
								$2,900
							</Typography>
						</Box>
						<Button
							variant="solid"
							size="md"
							color="primary"
							aria-label="Explore Bahamas Islands"
							sx={{
								ml: "auto",
								alignSelf: "center",
								fontWeight: 600,
							}}
						>
							Explore
						</Button>
					</div>
				</CardContent>
			</Card>
			<Card sx={{ width: 250 }}>
				<div>
					<Typography level="title-lg" textAlign={"center"}>
						Yosemite National Park
					</Typography>
				</div>
				<CardContent
					className={styles["card-content"]}
					orientation="horizontal"
				>
					<img
						src="/img/img_businessshirt.png"
						style={{
							height: "150px",
							width: "150px",
						}}
						loading="lazy"
						alt=""
					/>
					<div className={styles["card-details"]}>
						<Box>
							<Typography level="body-xs">Total price:</Typography>
							<Typography fontSize="lg" fontWeight="lg">
								$2,900
							</Typography>
						</Box>
						<Button
							variant="solid"
							size="md"
							color="primary"
							aria-label="Explore Bahamas Islands"
							sx={{
								ml: "auto",
								alignSelf: "center",
								fontWeight: 600,
							}}
						>
							Explore
						</Button>
					</div>
				</CardContent>
			</Card>
			<Card sx={{ width: 250 }}>
				<div>
					<Typography level="title-lg" textAlign={"center"}>
						Yosemite National Park
					</Typography>
				</div>
				<CardContent
					className={styles["card-content"]}
					orientation="horizontal"
				>
					<img
						src="/img/img_businessshirt.png"
						style={{
							height: "150px",
							width: "150px",
						}}
						loading="lazy"
						alt=""
					/>
					<div className={styles["card-details"]}>
						<Box>
							<Typography level="body-xs">Total price:</Typography>
							<Typography fontSize="lg" fontWeight="lg">
								$2,900
							</Typography>
						</Box>
						<Button
							variant="solid"
							size="md"
							color="primary"
							aria-label="Explore Bahamas Islands"
							sx={{
								ml: "auto",
								alignSelf: "center",
								fontWeight: 600,
							}}
						>
							Explore
						</Button>
					</div>
				</CardContent>
			</Card>
		</Box>
	);
}

export default NewArrivals;
