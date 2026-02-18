import { Button, Stack, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import createUser from "./create-user";

export default function Signup() {
	return (
		<form action={createUser} className="w-full max-w-xs">
			<Stack spacing={2} >
				<TextField label="Email" variant="outlined" type="email" name="email" required />
				<TextField label="Name" variant="outlined" type="text" name="name" required />
				<TextField label="Password" variant="outlined" type="password" name="password" required />
				<Button variant="contained" color="primary" type="submit">Sign Up</Button>
				<NextLink href="/auth/login">
					<Typography 
							variant="body2" 
							color="primary" 
							className="cursor-pointer" 
							sx={{ "&:hover": { textDecoration: "underline" } }}
					>						Already have an account? Login
					</Typography>
				</NextLink>
			</Stack>
		</form>
	);
}
