import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";

export default function Signup() {
	return (
		<Stack spacing={2} className="w-full max-w-xs">
			<TextField label="Email" variant="outlined" type="email" />
			<TextField label="Name" variant="outlined" type="text" />
			<TextField label="Password" variant="outlined" type="password" />
			<Button variant="contained" color="primary">Login</Button>
			<NextLink href="/auth/login" className="self-center">
				<Link variant="body2" className="self-center">
					Login
				</Link>
			</NextLink>
		</Stack>
	);
}