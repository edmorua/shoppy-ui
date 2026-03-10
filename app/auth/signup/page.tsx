"use client";
import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import createUser from "./create-user";
import { useActionState } from "react";

export default function Signup() {
	const [state, formAction] = useActionState(createUser, { errors: {} });
	const errors = state?.errors ?? {};
	const values = state?.values ?? {};
	return (
		<form action={formAction} className="w-full max-w-xs">
			<Stack spacing={2} >
				{errors.form && <Alert severity="error">{errors.form}</Alert>}
				<TextField label="Email" variant="outlined" type="email" name="email" defaultValue={values.email} helperText={errors.email} error={!!errors.email} required />
				<TextField label="Name" variant="outlined" type="text" name="name" defaultValue={values.name} helperText={errors.name} error={!!errors.name} required />
				<TextField label="Password" variant="outlined" type="password" name="password" helperText={errors.password} error={!!errors.password} required />
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
