import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Register() {
	return (
		<section className="flex flex-row items-center justify-center h-screen bg-gray-100">
			{/* Svg image on the left side of the register page */}
			<div className="flex-[0.6] flex items-center justify-center ml-0 h-full">
				<img
					src="/img/register-img.svg"
					alt="Register"
					className="w-full h-full object-contain"
				/>
			</div>
			{/* Form on the right side of the register page */}
			<div className="flex-[0.4] flex flex-col items-center justify-center h-full px-8">
				{/* Form div heading */}
				<Typography
					variant="h4"
					className="text-center !font-bold mb-4 !text-4xl"
				>
					Create an account
				</Typography>
				<Typography variant="body1" className="text-center mb-4 !text-base">
					Enter your details below.
				</Typography>
				{/* Form fields will go here */}
				{/* <form action=""> */}
				<TextField
					label="Email"
					variant="standard"
					margin="normal"
					type="email"
				/>
				<TextField
					label="First and Last Name"
					variant="standard"
					margin="normal"
				/>
				<TextField
					label="Password"
					variant="standard"
					margin="normal"
					type="password"
				/>
				<TextField
					label="Confirm Password"
					variant="standard"
					margin="normal"
					type="password"
				/>
				{/* Use the btn-primary color from Tailwind config */}
				{/* </form> */}
				<Button
					variant="contained"
					className="bg-btn-primary text-white hover:bg-hover-btn-primary !capitalize !mt-4 self-center"
					sx={{
						// use tailwind config color btn-primary
						backgroundColor: "#DB4444 !important",
						"&:hover": {
							backgroundColor: "#E07575 !important",
						},
					}}
				>
					Create Account
				</Button>
				<Button
					variant="outlined"
					className="!capitalize !mt-4 !text-black  !border-black hover:bg-gray-200"
				>
					Sign Up with Google
				</Button>
				<div className="mt-4">
					<Typography variant="body1" className="text-center mt-4 !text-base">
						Already have an account? {<Link href="/login">Login</Link>}
					</Typography>
				</div>
			</div>
		</section>
	);
}
