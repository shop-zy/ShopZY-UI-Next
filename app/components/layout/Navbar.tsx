"use client";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";
import { useRouter } from "next/navigation";

const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settings = [
	{
		id: 1,
		name: "Profile",
		link: "/profile",
	},
	{
		id: 2,
		name: "Account",
		link: "/account",
	},
	{
		id: 3,
		name: "Dashboard",
		link: "/dashboard",
	},
	{
		id: 4,
		name: "Logout",
		link: "/logout",
	},
];

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.black, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.black, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100% !important",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

export default function PrimarySearchAppBar() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [userMenuOpen, setUserMenuOpen] = useState(false);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		React.useState<null | HTMLElement>(null);
	const router = useRouter();
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (link: string) => {
		router.push(link);
		handleMenuClose();
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={() => handleMenuItemClick("/profile")}>
				Profile
			</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size="large" aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="error">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
				>
					<Badge badgeContent={17} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		// {/* Header */}
		<header className="flex items-center justify-between px-[135px] py-4 border-b border-overlay-medium">
			<Link href="/" className="text-2xl font-inter font-bold text-primary">
				Exclusive
			</Link>
			<nav className="flex items-center gap-12">
				<div className="flex items-center">
					<Link href="/" className="text-base font-poppins text-primary">
						Home
					</Link>
					<Image
						src="/img/img_underline.svg"
						alt="Active"
						width={48}
						height={1}
						className="mt-6"
					/>
				</div>
				<Link href="/contact" className="text-base font-poppins text-primary">
					Contact
				</Link>
				<Link href="/about" className="text-base font-poppins text-primary">
					About
				</Link>
				<Link href="/signup" className="text-base font-poppins text-primary">
					Sign Up
				</Link>
			</nav>
			<div className="flex items-center gap-6">
				<div className="flex items-center bg-secondary rounded px-5 py-2 w-[243px]">
					<input
						type="text"
						placeholder="What are you looking for?"
						className="flex-1 bg-transparent text-xs font-poppins text-secondary outline-none"
					/>
					<Image
						src="/img/img_search.svg"
						alt="Search"
						width={24}
						height={24}
					/>
				</div>
				<Image
					src="/img/img_wishlist.svg"
					alt="Wishlist"
					width={32}
					height={32}
				/>
				<div className="relative">
					<Image src="/img/img_cart1.svg" alt="Cart" width={24} height={24} />
					<div className="absolute -top-2 -right-2 bg-error text-light text-xs rounded-full w-4 h-4 flex items-center justify-center">
						2
					</div>
				</div>
				<div className="relative">
					<button
						onClick={() => setUserMenuOpen(!userMenuOpen)}
						className="w-8 h-8 rounded-full overflow-hidden"
					>
						<Image src="/img/img_user.svg" alt="User" width={32} height={32} />
					</button>
					{userMenuOpen && (
						<div className="absolute top-12 right-0 bg-overlay-light rounded shadow-lg w-[224px] p-4">
							<div className="flex flex-col gap-3">
								<div className="flex items-center gap-4">
									<Image
										src="/img/img_user_gray_50.svg"
										alt="Account"
										width={32}
										height={32}
									/>
									<span className="text-sm font-poppins text-light">
										Manage My Account
									</span>
								</div>
								<div className="flex items-center gap-4">
									<Image
										src="/img/img_iconmallbag.svg"
										alt="Orders"
										width={24}
										height={24}
									/>
									<span className="text-sm font-poppins text-light">
										My Order
									</span>
								</div>
								<div className="flex items-center gap-4">
									<Image
										src="/img/img_iconcancel.svg"
										alt="Cancellations"
										width={24}
										height={24}
									/>
									<span className="text-sm font-poppins text-light">
										My Cancellations
									</span>
								</div>
								<div className="flex items-center gap-4">
									<Image
										src="/img/img_vector.svg"
										alt="Reviews"
										width={24}
										height={24}
									/>
									<span className="text-sm font-poppins text-light">
										My Reviews
									</span>
								</div>
								<div className="flex items-center gap-4">
									<Image
										src="/img/img_iconlogout.svg"
										alt="Logout"
										width={24}
										height={24}
									/>
									<span className="text-sm font-poppins text-light">
										Logout
									</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
