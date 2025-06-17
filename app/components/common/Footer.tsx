"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
	return (
		<footer className="bg-primary w-full">
			<div className="flex flex-col w-full h-[440px]">
				{/* Main Footer Content */}
				<div className="flex flex-row justify-center pt-[74px] px-[135px]">
					<div className="flex flex-row w-[1170px] h-[241px] gap-[87px]">
						{/* Exclusive Section */}
						<div className="relative w-[217px] h-[193px]">
							<div className="flex flex-col w-[217px] h-[193px]">
								<h2 className="text-2xl font-inter font-bold leading-[30px] text-left text-light mb-4">
									Exclusive
								</h2>
								<Link
									href="/subscribe"
									className="text-xl font-poppins font-medium leading-[30px] text-left text-light mb-4"
								>
									Subscribe
								</Link>
								<p className="text-base font-poppins font-normal leading-6 text-left text-light mb-6">
									Get 10% off your first order
								</p>
								<div className="flex flex-row items-center border border-light rounded h-12 w-[217px]">
									<input
										type="email"
										placeholder="Enter your email"
										className="flex-1 bg-transparent text-base font-poppins font-normal leading-6 text-footer-secondary px-4 outline-none"
									/>
									<div className="w-6 h-6 mr-4">
										<Image
											src="/images/img_iconsend.svg"
											alt="Send"
											width={24}
											height={24}
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Support and Account Section */}
						<div className="flex flex-row w-[385px] h-[238px] gap-[87px]">
							{/* Support */}
							<div className="flex flex-col w-[175px] h-[99px]">
								<h3 className="text-xl font-poppins font-medium leading-[30px] text-left text-light mb-6">
									Support
								</h3>
								<Link
									href="/contact"
									className="text-base font-poppins font-normal leading-6 text-left text-light mb-4"
								>
									111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
								</Link>
								<p className="text-base font-poppins font-normal leading-6 text-left text-light mb-4">
									exclusive@gmail.com
								</p>
								<p className="text-base font-poppins font-normal leading-6 text-left text-light">
									+88015-88888-9999
								</p>
							</div>

							{/* Account */}
							<div className="flex flex-col w-[123px] h-[118px]">
								<h3 className="text-xl font-poppins font-medium leading-[30px] text-left text-light mb-6">
									Account
								</h3>
								<p className="text-base font-poppins font-normal leading-6 text-left text-light mb-2">
									My Account
								</p>
								<p className="text-base font-poppins font-normal leading-6 text-left text-light mb-2">
									Login / Register
								</p>
								<p className="text-base font-poppins font-normal leading-6 text-left text-light mb-2">
									Cart
								</p>
								<p className="text-base font-poppins font-normal leading-6 text-left text-light mb-2">
									Wishlist
								</p>
								<p className="text-base font-poppins font-normal leading-6 text-left text-light">
									Shop
								</p>
							</div>
						</div>

						{/* Quick Link */}
						<div className="flex flex-col w-[109px] h-[197px]">
							<h3 className="text-xl font-poppins font-medium leading-[30px] text-left text-light mb-6">
								Quick Link
							</h3>
							<Link
								href="/privacy"
								className="text-base font-poppins font-normal leading-6 text-left text-light mb-2"
							>
								Privacy Policy
							</Link>
							<p className="text-base font-poppins font-normal leading-6 text-left text-light mb-2">
								Terms Of Use
							</p>
							<p className="text-base font-poppins font-normal leading-6 text-left text-light mb-2">
								FAQ
							</p>
							<Link
								href="/contact"
								className="text-base font-poppins font-normal leading-6 text-left text-light"
							>
								Contact
							</Link>
						</div>

						{/* Download App */}
						<div className="flex flex-col w-[198px] h-[210px]">
							<h3 className="text-xl font-poppins font-medium leading-[30px] text-left text-light mb-6">
								Download App
							</h3>
							<p className="text-xs font-poppins font-medium leading-[18px] text-left text-footer-primary mb-2">
								Save $3 with App New User Only
							</p>

							{/* QR Code and App Store Links */}
							<div className="flex flex-row w-[198px] h-[84px] gap-2 mb-6">
								<div className="bg-primary w-20 h-20 p-1">
									<Image
										src="/images/img_qrcode_1.png"
										alt="QR Code"
										width={76}
										height={76}
									/>
								</div>
								<div className="flex flex-col w-[110px] h-[84px] gap-1">
									<div className="bg-footer w-[110px] h-10 rounded relative">
										<Image
											src="/images/img_pngtransparentgoogleplaystorelogogoogleplayappstoreandroidwalletstextlabellogo.png"
											alt="Google Play Store"
											width={104}
											height={30}
											className="absolute top-[5px] left-[3px] rounded"
										/>
									</div>
									<div className="bg-primary w-[110px] h-10 rounded">
										<Image
											src="/images/img_downloadappstore.png"
											alt="App Store"
											width={104}
											height={34}
											className="absolute rounded"
										/>
									</div>
								</div>
							</div>

							{/* Social Media Icons */}
							<div className="flex flex-row w-[168px] h-6 gap-6">
								<Image
									src="/images/img_iconfacebook.svg"
									alt="Facebook"
									width={24}
									height={24}
								/>
								<Image
									src="/images/img_icontwitter.svg"
									alt="Twitter"
									width={24}
									height={24}
								/>
								<Image
									src="/images/img_iconinstagram.svg"
									alt="Instagram"
									width={24}
									height={24}
								/>
								<Image
									src="/images/img_iconlinkedin.svg"
									alt="LinkedIn"
									width={24}
									height={24}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="mt-auto">
					<Image
						src="/images/img_underline_white_a700_0x1440.svg"
						alt="Divider"
						width={1440}
						height={1}
						className="w-full"
					/>
					<div className="flex flex-row justify-center items-center h-12 gap-2">
						<Image
							src="/images/img_iconcopyright.svg"
							alt="Copyright"
							width={20}
							height={20}
						/>
						<p className="text-base font-poppins font-normal leading-6 text-left text-white">
							Copyright Rimel 2022. All right reserved
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
