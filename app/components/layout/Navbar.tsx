"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Search } from "@mui/icons-material";
import Link from "next/link";
import axios from "axios";
import { NoSsr } from "@mui/material";

import styles from "./Navbar.module.css";

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

function Navbar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	// const navigate: Navigator = new Navigator();

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogoutClick = () => {
		// should be asycn when making actual call
		console.log("handleLogoutClicked");

		// try {
		//   const refreshToken = getRefreshToken();
		//   const { data } = await axios.post(
		//     `${process.env.NEXT_APP_DJANGO_API_URL}/api/accounts/logout`,
		//     {
		//       refresh_token: refreshToken
		//     }
		//   )
		//   console.log("Logout data is: ", data);
		// 	localStorage.removeItem("accessToken");
		// 	localStorage.removeItem("refreshToken");
		// 	navigate("/login");
		// } catch (error) {
		//   onsole.log("Error logging out: ", error);
		// }
	};

	return (
		<NoSsr>
			<AppBar id={styles.navbar} position="relative">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="#app-bar-with-responsive-menu"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							LOGO
						</Typography>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography color="black" textAlign="center">
											{page}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						{/* Mobile View  */}
						<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
						<Typography
							variant="h5"
							noWrap
							component="a"
							href="#app-bar-with-responsive-menu"
							id={styles["brand-name"]}
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							LOGO
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
							}}
						>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: "black", display: "block" }}
								>
									{page}
								</Button>
							))}
						</Box>
						{/* Mobile View End */}
						<Box sx={{ flexGrow: 0 }} className={styles["search-avatar-box"]}>
							<ShoppingCartOutlinedIcon
								className={styles["cart-icon"]}
								// onClick={() => navigate("/cart")}
							/>
							<Search />
							{/* {user ? (
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar
										alt={user ? user.first_name : ""}
										src="/static/images/avatar/2.jpg"
									/>
								</IconButton>
							</Tooltip>
						) : (
							<Button className="btn btn-primary" variant="outlined">
								<Link id={styles.link} href="/login">
									Login
								</Link>
							</Button>
						)} */}

							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar
										// alt={user ? user.first_name : ""}
										src="/static/images/avatar/2.jpg"
									/>
								</IconButton>
							</Tooltip>

							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<MenuItem key={setting.id} onClick={handleCloseUserMenu}>
										{setting.name === "Logout" ? (
											<Typography key={setting.id} onClick={handleLogoutClick}>
												{setting.name}
											</Typography>
										) : (
											<Link
												id={styles["settings-menu"]}
												href={setting.link}
												// textAlign="center"
												key={setting.id}
											>
												{setting.name}
											</Link>
										)}
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</NoSsr>
	);
}
export default Navbar;
