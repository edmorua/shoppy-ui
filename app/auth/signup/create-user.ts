'use server';

import { API_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";

export default async function createUser(
	prevState: { error: string },
	formData: FormData
){
	const rawData = {
		email: formData.get('email'),
		password: formData.get('password'),
		name: formData.get('name'),
	}
	const response = await fetch(`${API_URL}/users`, {
		method: 'POST',
		body: JSON.stringify(rawData),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if (!response.ok) {
		const error = await response.json();
		return { error: error.message || 'Failed to create user' };
	}
	redirect('/');
}
