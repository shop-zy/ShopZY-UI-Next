"use client";
import React, { useState } from "react";
import {
	useScrollTrigger,
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { NavbarMenu } from "@/app/utils/constants/interface";

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
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
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
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

function ElevationScroll({
	children,
	window,
}: {
	children: React.ReactElement<any, typeof AppBar>;
	window?: () => Window;
}) {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

export default function PrimarySearchAppBar(props: any) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
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

	const navigationItems: NavbarMenu[] = [
		{
			label: "Home",
			href: "/",
			isActive: true,
			onClick: () => router.push("/"),
		},
		{
			label: "About",
			href: "/about",
			isActive: false,
			onClick: () => router.push("/about"),
		},
		{
			label: "Sign Up",
			href: "/register",
			isActive: false,
			onClick: () => router.push("/register"),
		},
		{
			label: "Contact",
			href: "/contact",
			isActive: false,
			onClick: () => router.push("/contact"),
		},
	];

	return (
		<Box sx={{ flexGrow: 1 }}>
			<ElevationScroll {...props}>
				<AppBar component={"nav"} position="fixed">
					<Toolbar
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ display: { xs: "none", sm: "block" } }}
						>
							ShopZY
						</Typography>
						<Box sx={{ display: "flex" }}>
							{navigationItems.map((item) => (
								<Button
									key={item.label}
									onClick={item.onClick}
									sx={{ my: 2, color: "white", display: "block" }}
								>
									{item.label}
								</Button>
							))}
						</Box>
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="What are you looking for?"
								inputProps={{ "aria-label": "search" }}
							/>
						</Search>
						<Box sx={{ display: { xs: "none", md: "flex" } }}>
							<IconButton
								size="large"
								aria-label="show 4 new mails"
								color="inherit"
							>
								<Badge badgeContent={4} color="error">
									<MailIcon />
								</Badge>
							</IconButton>
							<IconButton
								size="large"
								aria-label="show 17 new notifications"
								color="inherit"
							>
								<Badge badgeContent={17} color="error">
									<NotificationsIcon />
								</Badge>
							</IconButton>
							<IconButton
								size="large"
								edge="end"
								aria-label="account of current user"
								aria-controls={menuId}
								aria-haspopup="true"
								onClick={handleProfileMenuOpen}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</Box>
						<Box sx={{ display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="show more"
								aria-controls={mobileMenuId}
								aria-haspopup="true"
								onClick={handleMobileMenuOpen}
								color="inherit"
							>
								<MoreIcon />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			{renderMobileMenu}
			{renderMenu}
			{/* Add a Toolbar to push content below the fixed AppBar */}
			<Toolbar />
		</Box>
	);
}
