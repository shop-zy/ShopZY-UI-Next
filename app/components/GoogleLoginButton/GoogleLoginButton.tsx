"use client";

import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/joy/Button";

function GoogleLoginButton() {
	const initiateGoogleLogin = () => {
		const authUrl = `${process.env.NEXT_PUBLIC_DJANGO_BASE_URL}/accounts/auth/google`;
		window.location.href = authUrl;
	};

	return (
		<div>
			<Button
				color="primary"
				className=""
				variant="outlined"
				startDecorator={<GoogleIcon />}
				onClick={initiateGoogleLogin}
			>
				Sign In with Google
			</Button>
		</div>
	);
}

export default GoogleLoginButton;
