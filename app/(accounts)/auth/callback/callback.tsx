"use client";

// pages/auth/callback.tsx
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { request } from "http";

export default function AuthCallback() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");
	const googleAccessToken = searchParams.get("google_access_token") || "";
	const error = searchParams.get("error");

	// const

	useEffect(() => {
		console.log("Token:", token);
		console.log("Token type:", typeof token);
		if (typeof token === "string") {
			// Store token securely (httpOnly cookie recommended)
			localStorage.setItem("access_token", token);
			localStorage.setItem("google_access_token", googleAccessToken);
			// localStorage.setItem("userDetails", JSON.stringify())
			// router.push("/profile"); // Redirect to protected page
		}

		if (error) {
			console.error("OAuth Error:", error);
			router.push("/login");
		}
	}, [token, error, router]);

	return <div>Authenticating...</div>;
}
