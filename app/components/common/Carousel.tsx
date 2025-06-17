"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CarouselSlide {
	id: string;
	title: string;
	subtitle?: string;
	description: string;
	linkText: string;
	linkUrl: string;
	imageUrl: string;
	imageAlt: string;
}

interface CarouselProps {
	slides: CarouselSlide[];
	autoSlide?: boolean;
	autoSlideInterval?: number;
	className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
	slides,
	autoSlide = true,
	autoSlideInterval = 5000,
	className = "",
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		if (!autoSlide || slides.length <= 1) return;

		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, autoSlideInterval);

		return () => clearInterval(interval);
	}, [autoSlide, autoSlideInterval, slides.length]);

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	if (slides.length === 0) return null;

	return (
		<div
			className={`relative w-full bg-black text-white overflow-hidden ${className}`}
		>
			{/* Main carousel content */}
			<div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
				{slides.map((slide, index) => (
					<div
						key={slide.id}
						className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
							index === currentSlide
								? "translate-x-0"
								: index < currentSlide
								? "-translate-x-full"
								: "translate-x-full"
						}`}
					>
						<div className="flex flex-col lg:flex-row items-center justify-between h-full px-6 lg:px-12 py-8 lg:py-12">
							{/* Left side - Content */}
							<div className="flex-1 lg:pr-12 mb-8 lg:mb-0">
								{slide.subtitle && (
									<div className="flex items-center mb-4">
										<div className="w-8 h-8 mr-3">
											{/* Apple logo placeholder - replace with actual logo */}
											<svg
												viewBox="0 0 24 24"
												fill="currentColor"
												className="w-full h-full"
											>
												<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
											</svg>
										</div>
										<span className="text-sm lg:text-base opacity-80">
											{slide.subtitle}
										</span>
									</div>
								)}

								<h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
									{slide.title}
								</h1>

								<p className="text-lg lg:text-xl mb-8 opacity-90 max-w-md">
									{slide.description}
								</p>

								<Link
									href={slide.linkUrl}
									className="inline-flex items-center text-lg lg:text-xl font-medium border-b-2 border-white pb-1 hover:opacity-80 transition-opacity group"
								>
									{slide.linkText}
									<svg
										className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</svg>
								</Link>
							</div>

							{/* Right side - Image */}
							<div className="flex-1 flex justify-center lg:justify-end">
								<div className="relative w-full max-w-md lg:max-w-lg">
									<Image
										src={slide.imageUrl}
										alt={slide.imageAlt}
										width={600}
										height={600}
										className="w-full h-auto object-contain"
										priority={index === 0}
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Navigation arrows */}
			{slides.length > 1 && (
				<>
					<button
						onClick={prevSlide}
						className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center z-10"
						aria-label="Previous slide"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					<button
						onClick={nextSlide}
						className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center z-10"
						aria-label="Next slide"
					>
						<svg
							className="w-6 h-6"
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
					</button>
				</>
			)}

			{/* Dots indicator */}
			{slides.length > 1 && (
				<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-3 h-3 rounded-full transition-colors ${
								index === currentSlide
									? "bg-white"
									: "bg-white/40 hover:bg-white/60"
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Carousel;

// Example usage component
export const CarouselExample: React.FC = () => {
	const slides: CarouselSlide[] = [
		{
			id: "1",
			title: "Up to 10% off Voucher",
			subtitle: "iPhone 14 Series",
			description:
				"Get the latest iPhone with amazing discounts and exclusive offers.",
			linkText: "Shop Now",
			linkUrl: "/iphone-14",
			imageUrl: "/images/iphone-14.png", // Replace with your actual image path
			imageAlt: "iPhone 14 Series",
		},
		{
			id: "2",
			title: "MacBook Pro Sale",
			subtitle: "MacBook Pro M3",
			description:
				"Experience the power of M3 chip with incredible performance.",
			linkText: "Learn More",
			linkUrl: "/macbook-pro",
			imageUrl: "/images/macbook-pro.png", // Replace with your actual image path
			imageAlt: "MacBook Pro M3",
		},
		{
			id: "3",
			title: "AirPods Pro",
			subtitle: "AirPods Pro 2nd Gen",
			description: "Immersive sound experience with active noise cancellation.",
			linkText: "Buy Now",
			linkUrl: "/airpods-pro",
			imageUrl: "/images/airpods-pro.png", // Replace with your actual image path
			imageAlt: "AirPods Pro 2nd Generation",
		},
	];

	return (
		<div className="w-full h-[500px] lg:h-[600px]">
			<Carousel
				slides={slides}
				autoSlide={true}
				autoSlideInterval={5000}
				className="rounded-lg"
			/>
		</div>
	);
};
