import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import * as React from "react";
// import { useLocation } from "react-router-dom";

export default function BreadCrumbs() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	// const location = useLocation();
	// const { pathname } = location;

	// Map URL segments to readable page names
	const pageNames: Record<string, string> = {
		home: "Home",
		about: "About Us",
		team: "Our Team",
		contact: "Contact Us",
		profile: "User Profile",
		settings: "Settings",
		services: "Services",
		cart: "Cart",
		product: "Products",
		"product-details": "Product Details",
	};

	// Split the pathname into segments
	// const pathSegments: string[] = pathname.split("/").filter(Boolean);

	// Generate readable names for each path segment
	const getPageName = (segment: string): string =>
		pageNames[segment] || segment;

	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (): void => {
		setAnchorEl(null);
	};

	// Show "Home", the last two breadcrumbs, and collapse the rest into a menu if needed
	// const visibleBreadcrumbs: string[] =
	// 	pathSegments.length > 3
	// 		? ["home", pathSegments[0], "...", ...pathSegments.slice(-2)]
	// 		: ["home", ...pathSegments];
	const pathSegments = ["home", "about", "team", "contact", "profile"];
	const visibleBreadcrumbs: string[] =
		pathSegments.length > 3
			? ["home", pathSegments[0], "...", ...pathSegments.slice(-2)]
			: ["home", ...pathSegments];

	return (
		<React.Fragment>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				aria-labelledby="with-menu-demo-breadcrumbs"
			>
				{/* Render the hidden breadcrumbs in the menu */}
				{pathSegments.slice(1, -2).map((segment, index) => (
					<MenuItem key={index} onClick={handleClose}>
						<Link
							color="neutral"
							href={`/${pathSegments.slice(0, index + 2).join("/")}`}
						>
							{getPageName(segment)}
						</Link>
					</MenuItem>
				))}
			</Menu>
			<Breadcrumbs aria-label="breadcrumbs">
				{/* Render visible breadcrumbs */}
				{visibleBreadcrumbs.map((segment, index) => {
					if (segment === "...") {
						return (
							<Button
								key={index}
								size="sm"
								onClick={handleClick}
								variant="plain"
								color="primary"
							>
								•••
							</Button>
						);
					}
					return (
						<Link
							key={index}
							color="primary"
							href={
								segment === "home"
									? "/"
									: `/${pathSegments.slice(0, index).join("/")}`
							}
						>
							{getPageName(segment)}
						</Link>
					);
				})}
			</Breadcrumbs>
		</React.Fragment>
	);
}
