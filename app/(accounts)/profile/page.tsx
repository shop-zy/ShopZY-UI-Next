"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MyProfile from "./MyProfile/MyProfile";
import BreadCrumbs from "@/app/components/layout/BreadCrumbs";
import WishList from "./WishList/WishList";

interface MenuItem {
	title: string;
	open?: boolean;
	subMenu?: {
		title: string;
		component: React.ReactNode;
	}[];
	component?: string | React.ReactNode;
}

const accountsSideMenu: MenuItem[] = [
	{
		title: "Manage My Account",
		open: true,
		subMenu: [
			{
				title: "My Profile",
				component: (
					<MyProfile
						user={{
							first_name: "Hariharan",
							last_name: "",
							email: "test@gmail.com",
						}}
						profile={{
							address: "109, Austin Road, New York",
							city: "New York",
							state: "NY",
							zip: "10001",
						}}
					/>
				),
			},
			{
				title: "Address Book",
				component: (
					<MyProfile
						user={{
							first_name: "Hariharan",
							last_name: "",
							email: "test@gmail.com",
						}}
						profile={{
							address: "109, Austin Road, New York",
							city: "New York",
							state: "NY",
							zip: "10001",
						}}
					/>
				),
			},
		],
		component: "",
	},
	{
		title: "My Orders",
		open: true,
		subMenu: [
			{
				title: "My Returns",
				component: (
					<MyProfile
						user={{
							first_name: "Hariharan",
							last_name: "",
							email: "test@gmail.com",
						}}
						profile={{
							address: "109, Austin Road, New York",
							city: "New York",
							state: "NY",
							zip: "10001",
						}}
					/>
				),
			},
		],
		component: "",
	},
	{
		title: "My Wishlist",
		component: <WishList />,
	},
];

function Accounts() {
	const [sideMenu, setSideMenu] = React.useState<MenuItem[]>(accountsSideMenu);

	const handleClick = (index: number) => {
		// Prevent unnecessary state updates
		setSideMenu((prevMenu) =>
			prevMenu.map((menu, i) =>
				i === index ? { ...menu, open: !menu.open } : menu
			)
		);
	};

	const handleChildTextClick = (e: React.MouseEvent<HTMLDivElement>) => {
		console.log(e.currentTarget.innerHTML);
	};

	const handleParentTextClick = (menu: MenuItem, index: number) => {
		console.log(JSON.stringify(menu));
		if (menu.title === "My Wishlist") {
			// Navigate to wishlist page
		}
	};

	return (
		<Box component={"section"} className="m-4">
			<Stack
				direction={"row"}
				justifyContent={"space-between"}
				alignItems={"center"}
			>
				<BreadCrumbs />
				<Typography className="text-[14px]" variant={"body1"}>
					Welcome!{" "}
					<span className="text-secondary-color">
						{/* Replace with user data */}
						Guest
					</span>
				</Typography>
			</Stack>
			<Stack direction={"row"} gap={2} className="m-10">
				<Box
					component={"div"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"flex-start"}
					width={"20%"}
				>
					{/* Accounts Side Menu */}
					<List
						sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
						component="nav"
						aria-labelledby="nested-list-subheader"
					>
						{sideMenu.map((menu, index) => (
							<React.Fragment key={index}>
								<ListItemButton onClick={() => handleClick(index)}>
									<ListItemText
										primary={menu.title}
										onClick={() => handleParentTextClick(menu, index)}
									/>
									{menu.subMenu && menu.subMenu.length > 0 ? (
										menu.open ? (
											<ExpandLess />
										) : (
											<ExpandMore />
										)
									) : null}
								</ListItemButton>
								{menu.subMenu && menu.subMenu.length > 0 && (
									<Collapse in={menu.open} timeout="auto" unmountOnExit>
										<List component="div" disablePadding>
											{menu.subMenu.map((subMenu, subIndex) => (
												<ListItemButton sx={{ pl: 4 }} key={subIndex}>
													<ListItemText
														primary={subMenu.title}
														onClick={handleChildTextClick}
													/>
												</ListItemButton>
											))}
										</List>
									</Collapse>
								)}
							</React.Fragment>
						))}
					</List>
				</Box>
				<MyProfile
					user={{
						first_name: "Hariharan",
						last_name: "",
						email: "test@gmail.com",
					}}
					profile={{
						address: "109, Austin Road, New York",
						city: "New York",
						state: "NY",
						zip: "10001",
					}}
				/>
			</Stack>
		</Box>
	);
}

export default Accounts;
