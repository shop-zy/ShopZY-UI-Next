"use client";
import React, { useState } from "react";
import { Tooltip, Typography } from "@mui/material";
import {
	Input,
	Stack,
	LinearProgress,
	Button,
	FormControl,
	FormHelperText,
	CircularProgress,
} from "@mui/joy";
// import axios from "axios";
import { InfoOutlined } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

// Custom Imports
// import { getToken } from "../../../authConfig";

interface MyProfileProps {
	user: {
		first_name: string;
		last_name: string;
		email: string;
	};
	profile: {
		address: string;
		city: string;
		state: string;
		zip: string;
	};
}

function MyProfile({ user, profile }: MyProfileProps) {
	const [currentPassword, setCurrentPassword] = React.useState("");
	const [newPassword, setNewPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [firstName, setFirstName] = React.useState(user?.first_name);
	const [lastName, setLastName] = React.useState(user?.last_name);
	const [email, setEmail] = React.useState(user?.email);
	const [address, setAddress] = React.useState(profile?.address);
	const [loading, setLoading] = useState(false);
	// setLoading(false);
	const [editPasswordFlag, setEditPasswordFlag] = useState(false);

	const [helperFlag, setHelperFlag] = useState(false);
	const [confirmFlag, setConfirmFlag] = useState(false);

	const minLength = 12;
	// const token = getToken();

	// const AxiosInstance = axios.create({
	// 	headers: {
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// });

	// const handleSaveClick = () => {
	// 	// Check if there are changes in profile fields
	// 	const profileChanged =
	// 		firstName !== user?.first_name ||
	// 		lastName !== user?.last_name ||
	// 		email !== user?.email ||
	// 		address !== "Kingston, 5236, United State"; // Default address check

	// 	// Check if passwords are being edited and validate them
	// 	const passwordChanged =
	// 		editPasswordFlag &&
	// 		currentPassword !== "" &&
	// 		newPassword !== "" &&
	// 		confirmPassword !== "" &&
	// 		newPassword === confirmPassword &&
	// 		newPassword.length >= minLength;

	// 	if (!profileChanged && !passwordChanged) {
	// 		console.log("No changes to save.");
	// 		return; // Exit if there are no changes
	// 	}

	// 	if (editPasswordFlag && !passwordChanged) {
	// 		console.error("Password validation failed. Please fix the errors.");
	// 		return; // Exit if password validation fails
	// 	}

	// 	// Construct the request body
	// 	const reqBody = {
	// 		firstName: firstName,
	// 		lastName: lastName,
	// 		email: email,
	// 		address: address,
	// 	};

	// 	if (passwordChanged) {
	// 		console.log("Inside password changed");
	// 		reqBody.current_password = currentPassword;
	// 		reqBody.new_password = newPassword;
	// 	}
	// 	console.log("Request body: ", reqBody);

	// 	setLoading(true);

	// 	AxiosInstance.post(
	// 		`${process.env.REACT_APP_DJANGO_API_URL}/api/profile/user-profile`,
	// 		reqBody
	// 	)
	// 		.then((response) => {
	// 			console.log(
	// 				"Profile and/or password updated successfully",
	// 				response.data
	// 			);
	// 			setLoading(false);
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error updating profile and/or password", error);
	// 			setLoading(false);
	// 		});
	// 	// setTimeout(() => {
	// 	// 	setLoading(false);
	// 	// }, 4000);
	// };

	return (
		<div className="flex flex-1 justify-center self-center md:self-stretch">
			<div className="flex w-[94%] flex-col items-start justify-center gap-3.5 rounded bg-bg py-9 pl-20 pr-14 shadow-xs md:w-full md:px-5 sm:p-5">
				<Typography
					variant="h4"
					className="text-[20px] font-medium text-secondary-color"
				>
					Edit Your Profile
				</Typography>
				<div className="flex flex-col gap-6 self-stretch">
					<div className="flex gap-[50px] md:flex-row">
						<div className="flex w-full flex-col items-start gap-2">
							<Typography
								variant="body1"
								className="text-[16px] font-normal text-button text-black-color"
							>
								First Name
							</Typography>
							<Input
								name="firstName"
								placeholder={`Md`}
								value={firstName}
								onChange={(event) => setFirstName(event.target.value)}
								className="self-stretch rounded px-3.5"
							/>
						</div>
						<div className="flex w-full flex-col items-start gap-2">
							<Typography
								variant="body1"
								className="text-[16px] font-normal text-button"
							>
								Last Name
							</Typography>
							<Input
								name="lastName"
								value={lastName}
								onChange={(event) => setLastName(event.target.value)}
								placeholder={`Rimel`}
								className="self-stretch rounded px-3.5"
							/>
						</div>
					</div>
					<div className="flex gap-[50px] md:flex-row">
						<div className="flex w-full flex-col items-start gap-2">
							<Typography
								variant="body1"
								className="text-[16px] font-normal text-button"
							>
								Email
							</Typography>
							<Input
								type="email"
								name="email"
								placeholder={`rimel1111@gmail.com`}
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								className="self-stretch rounded px-3.5"
							/>
						</div>
						<div className="flex w-full flex-col items-start gap-2">
							<Typography
								variant="body1"
								className="text-[16px] font-normal text-button"
							>
								Address
							</Typography>
							<Input
								name="address"
								placeholder={`Kingston, 5236, United State`}
								value={address}
								onChange={(event) => setAddress(event.target.value)}
								className="self-stretch rounded px-3.5"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col items-start gap-2">
							<Stack direction={"row"} spacing={1} alignItems={"center"}>
								<Typography
									variant="body1"
									className="text-[16px] font-normal text-button"
								>
									Password Changes
								</Typography>
								<Tooltip title="Edit">
									<EditIcon
										onClick={() => setEditPasswordFlag(!editPasswordFlag)}
										fontSize="small"
										className="text-tertiary-color"
									/>
								</Tooltip>
							</Stack>
							<Stack spacing={2} width={"100%"}>
								<Input
									fullWidth
									type="password"
									name="placeboxinfo"
									placeholder={`Current Passwod`}
									className="rounded px-3.5"
									disabled={!editPasswordFlag}
									value={currentPassword}
									onChange={(event) => {
										setCurrentPassword(event.target.value);
										console.log(
											"currentPassword: ",
											currentPassword,
											currentPassword.length
										);
									}}
								/>
							</Stack>
						</div>
						<Stack
							spacing={0.5}
							sx={{
								"--hue": Math.min(newPassword.length * 10, 120),
								width: "100%",
							}}
						>
							<FormControl
								color={helperFlag ? "success" : "warning"}
								error={!helperFlag}
							>
								<Input
									type="password"
									name="placeboxinfo"
									placeholder={`New Passwod`}
									className="rounded px-3.5"
									disabled={!editPasswordFlag}
									value={newPassword}
									onChange={(event) => {
										setNewPassword(event.target.value);
										setHelperFlag(event.target.value.length >= minLength); // Update helperFlag based on length
									}}
								/>
								{editPasswordFlag ? (
									<LinearProgress
										determinate
										size="sm"
										value={Math.min(
											(newPassword.length * 100) / minLength,
											100
										)}
										sx={{
											bgcolor: "background.level3",
											color: "hsl(var(--hue) 80% 40%)",
										}}
									/>
								) : null}
								<Stack
									flexDirection={"row-reverse"}
									justifyContent={"space-between"}
									alignItems={"center"}
								>
									{editPasswordFlag ? (
										<Typography
											variant="body2"
											sx={{
												alignSelf: "flex-end",
												color: "hsl(var(--hue) 80% 30%)",
											}}
										>
											{newPassword.length < 3 && "Very weak"}
											{newPassword.length >= 3 &&
												newPassword.length < 6 &&
												"Weak"}
											{newPassword.length >= 6 &&
												newPassword.length < 10 &&
												"Strong"}
											{newPassword.length >= 10 && "Very strong"}
										</Typography>
									) : null}
									<FormHelperText>
										{editPasswordFlag ? (
											helperFlag && newPassword !== "" ? (
												<>
													<InfoOutlined />
													Password matches criteria!
												</>
											) : (
												"Password length must be at least 12 characters and the bar should be green."
											)
										) : null}
									</FormHelperText>
								</Stack>
							</FormControl>
						</Stack>
						<Stack
							spacing={0.5}
							sx={{
								"--hue": Math.min(confirmPassword.length * 10, 120),
								width: "100%",
							}}
						>
							<FormControl
								color={confirmFlag ? "success" : "danger"}
								error={!confirmFlag}
							>
								<Input
									type="password"
									name="placeboxinfo"
									placeholder="Confirm Password"
									className="rounded px-3.5"
									value={confirmPassword}
									disabled={!editPasswordFlag}
									onChange={(event) => {
										const value = event.target.value;
										setConfirmPassword(value);
										setConfirmFlag(newPassword === value); // Update confirmFlag based on comparison
										console.log("confirmFlag: ", confirmFlag);
										console.log(
											"confirmPassword",
											confirmPassword,
											confirmPassword.length
										);
									}}
								/>
								<FormHelperText>
									{editPasswordFlag &&
									confirmPassword !== "" &&
									newPassword !== "" ? (
										newPassword === confirmPassword ? (
											<>
												<InfoOutlined />
												Passwords match!
											</>
										) : (
											<>
												<InfoOutlined />
												Oops! Passwords do not match.
											</>
										)
									) : null}
								</FormHelperText>
							</FormControl>
						</Stack>
					</div>
					<div className="flex items-center justify-end gap-[33px]">
						<Button
							variant="outlined"
							className="text-[16px] btn text-black-color"
						>
							Cancel
						</Button>
						<Button
							variant="outlined"
							className="btn btn-secondary text-[16px]"
							startDecorator={
								loading ? (
									<CircularProgress
										variant="plain"
										sx={{ color: "#fff !important" }}
									/>
								) : (
									<></>
								)
							}
							// onClick={handleSaveClick}
						>
							{loading ? "Submitting..." : "Save Changes"}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyProfile;
