import { Button, Stack, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import loginUser from "./login-user";

export default function Login() {
	return (
		<form action={loginUser}>
			<Stack spacing={2} className="w-full max-w-xs">
				<TextField label="Email" variant="outlined" type="email" name="email" required />
				<TextField label="Password" variant="outlined" type="password" name="password" required />
				<Button variant="contained" color="primary" type="submit">Login</Button>
				<NextLink href="/auth/signup">
					<Typography 
						variant="body2" 
						color="primary" 
						className="cursor-pointer" 
						sx={{ "&:hover": { textDecoration: "underline" } }}
					>
						Don't have an account? Sign Up
					</Typography>
				</NextLink>
			</Stack>
		</form>
	);
}
