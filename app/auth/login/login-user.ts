'use server';

import { redirect } from "next/navigation";

export default async function loginUser(
	formData: FormData
): Promise<void> {
	const email = String(formData.get("email") ?? "").trim();
	const password = String(formData.get("password") ?? "");

	if (!email || !password) {
		redirect("/auth/login");
	}

	// TODO: Replace with your backend auth endpoint when available.
	redirect("/");
}
