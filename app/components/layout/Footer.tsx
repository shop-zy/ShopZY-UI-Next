import {
	FormControl,
	InputAdornment,
	Link,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer id={styles["footer-section"]}>
			<section id={styles["footer-content-section"]}>
				<div className={styles["newsletter-div"]}>
					<Typography variant="h5" id={styles["newsletter-heading"]}>
						Join our Newsletter
					</Typography>
					<br />
					<Typography variant="body1" className={styles["newsletter-content"]}>
						Drop your email below to get update about us, lastest news, tips,
						and more!
					</Typography>
					<br />
					<FormControl size="medium">
						<TextField
							placeholder="Email"
							className="footer_email"
							sx={{
								width: "100%",
								"& .MuiOutlinedInput-root": {
									backgroundColor: "#fff",
									"& fieldset": {
										borderColor: "#ccc",
									},
									"&:hover fieldset": {
										borderColor: "#ccc",
									},
									"&.Mui-focused fieldset": {
										borderColor: "#ccc",
									},
									// Change the color of the placeholder text
									"& .MuiInputBase-input": {
										color: "#000",
									},
								},
							}}
							variant="outlined"
							size="small"
							InputProps={{
								endAdornment: (
									<InputAdornment
										position="end"
										sx={{
											cursor: "pointer",
										}}
										onClick={() => {
											console.log("Thanks for subscribing!");
										}}
									>
										<ArrowRightAltIcon />
									</InputAdornment>
								),
							}}
						/>
					</FormControl>
				</div>
				<div className={styles["product-links-div"]}>
					<Typography variant="h5" id={styles["product-links-heading"]}>
						Product Links
					</Typography>
					<Link className={styles["product-links"]}>Categories</Link>
					<Link className={styles["product-links"]}>New Arrivals</Link>
					<Link className={styles["product-links"]}>Features</Link>
					<Link className={styles["product-links"]}>Collections</Link>
				</div>
				<div className={styles["product-links-div"]}>
					<Typography variant="h5" id={styles["product-links-heading"]}>
						Company
					</Typography>
					<Link className={styles["product-links"]}>About</Link>
					<Link className={styles["product-links"]}>Blog</Link>
					<Link className={styles["product-links"]}>Careers</Link>
					<Link className={styles["product-links"]}>Services</Link>
				</div>
				<div className={styles["product-links-div"]}>
					<Typography variant="h5" id={styles["product-links-heading"]}>
						Support
					</Typography>
					<Link className={styles["product-links"]}>Support Center</Link>
					<Link className={styles["product-links"]}>FAQs</Link>
					<Link className={styles["product-links"]}>Privacy Policy</Link>
					<Link className={styles["product-links"]}>Terms of Services</Link>
				</div>
				<div className={styles["product-links-div"]}>
					<Typography variant="h5" id={styles["product-links-heading"]}>
						Get In Touch
					</Typography>
					<div className={styles["social-icon-div"]}>
						<InstagramIcon />
						<XIcon />
						<FacebookIcon />
					</div>
				</div>
			</section>
			<p id={styles["copy-right-text"]}>© 2021 - All Rights Reserved</p>
		</footer>
	);
}

export default Footer;
