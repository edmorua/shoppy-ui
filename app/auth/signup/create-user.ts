'use server';

import { z } from "zod";
import { API_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";
import { getErrorMessage } from "../util/errors";

const schema = z.object({
	email: z.email({ message: "Invalid email address" }),
	name: z.string().min(1, { message: "Name is required" }),
	password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

type FormState = {
	errors: { email?: string; name?: string; password?: string; form?: string };
	values?: { email?: string; name?: string };
};

export default async function createUser(
	prevState: FormState,
	formData: FormData
): Promise<FormState> {
	const email = formData.get('email') as string;
	const name = formData.get('name') as string;

	const parsed = schema.safeParse({
		email,
		password: formData.get('password'),
		name,
	});

	if (!parsed.success) {
		const fieldErrors = z.flattenError(parsed.error).fieldErrors;
		return {
			errors: {
				email: fieldErrors.email?.[0],
				name: fieldErrors.name?.[0],
				password: fieldErrors.password?.[0],
			},
			values: { email, name },
		};
	}

	const response = await fetch(`${API_URL}/users`, {
		method: 'POST',
		body: JSON.stringify(parsed.data),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if (!response.ok) {
		const error = await response.json();
		return { errors: { form: getErrorMessage(error) }, values: { email, name } };
	}
	redirect('/');
}
