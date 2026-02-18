'use server';

import { API_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";

export default async function createUser(
	formData: FormData
){
	const rawFormData = {
		name: formData.get('name'),
		email: formData.get('email'),
		password: formData.get('password'),
	}

	const response = await fetch(`${API_URL}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(rawFormData),
	});
	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || 'Failed to create user');
	}
	redirect('/');
}
