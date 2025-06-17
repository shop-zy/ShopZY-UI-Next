"use client";

import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: "primary" | "secondary";
	size?: "sm" | "md" | "lg";
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	className?: string;
}

function Button({
	children,
	onClick,
	variant = "primary",
	size = "md",
	disabled = false,
	type = "button",
	className = "",
	...props
}: ButtonProps) {
	const variants = {
		primary:
			"bg-button-primary text-button-primary hover:opacity-90 focus:ring-error",
		secondary:
			"bg-secondary text-primary hover:bg-overlay-light focus:ring-primary",
	};

	const sizes = {
		sm: "px-3 py-1 text-sm",
		md: "px-4 py-2",
		lg: "px-5 py-3 text-lg",
	};

	return (
		<button
			type={type}
			onClick={disabled ? undefined : onClick}
			disabled={disabled}
			className={`
        rounded 
        transition-all 
        duration-150 
        focus:outline-none 
        focus:ring-2 
        focus:ring-opacity-50
        font-roboto
        font-medium
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} 
        ${className}
      `
				.trim()
				.replace(/\s+/g, " ")}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
