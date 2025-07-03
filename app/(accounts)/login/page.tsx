"use client";
import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React, { useRef } from "react";

// Custom Components Imports
import GoogleLoginButton from "@/app/components/GoogleLoginButton/GoogleLoginButton";
import axios from "axios";
import { getToken, setToken } from "@/app/utils/authConfig";
import { useRouter } from "next/navigation";

function Login() {
	const email = useRef("");
	const password = useRef("");
	const router = useRouter();

	const handleLogin = async () => {
		try {
			const reqBody = {
				email: email.current,
				password: password.current,
			};
			axios
				.post(
					`${process.env.NEXT_PUBLIC_DJANGO_BASE_URL}/accounts/user/login`,
					reqBody
				)
				.then((response) => {
					if (response.status === 200) {
						// Handle successful login
						console.log("Login successful", response.data);
						// Redirect to home page or dashboard
						setToken(response.data?.token);
						router.push("/profile");
					}
				});
		} catch (error) {
			console.log("Error during login:", error);
		}
	};

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
					Log In to ShopZY
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
					onChange={(e) => (email.current = e.target.value)}
					required
				/>
				<TextField
					label="Password"
					variant="standard"
					margin="normal"
					type="password"
					onChange={(e) => (password.current = e.target.value)}
					required
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
					onClick={handleLogin}
				>
					Log In
				</Button>
				<GoogleLoginButton />
				<div className="mt-4">
					<Typography variant="body1" className="text-center mt-4 !text-base">
						{"Don't"} have an account? {<Link href="/register">Register</Link>}
					</Typography>
				</div>
			</div>
		</section>
	);
}

export default Login;
