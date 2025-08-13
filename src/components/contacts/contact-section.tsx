"use client";

import React, { useState } from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactSection() {
	const [selectedOption, setSelectedOption] = useState("Web Development");
	const inputClasses =
		"w-full border-b border-[var(--color-black)] bg-transparent focus:outline-none focus:border-[var(--color-red)] transition text-[var(--color-black)]";
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});

	const validateForm = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const phoneRegex = /^\+?[0-9]{6,15}$/;

		if (!form.firstName || !form.lastName || !form.email || !form.message) {
			toast.error("Please fill in all required fields.");
			return false;
		}

		if (!emailRegex.test(form.email)) {
			toast.error("Please enter a valid email address.");
			return false;
		}

		const cleanedPhone = form.phone.replace(/[\s-]/g, "");
		if (form.phone && !phoneRegex.test(cleanedPhone)) {
			toast.error("Please enter a valid phone number.");
			return false;
		}

		return true;
	};

	return (
		<div className="px-6">
			<div className="w-full max-w-7xl mx-auto mt-6 flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg bg-[var(--color-white)]">
				{/* Colonna sinistra - Informazioni */}
				<div className="w-full md:w-1/2 bg-[var(--color-red)] text-[var(--color-white)] p-10 flex flex-col justify-between">
					<div>
						<h2 className="text-3xl font-bold mb-2">Contact Information</h2>
						<p className="mb-8 text-xl">
							Fill up the form and our Team will get back to you within 24
							hours.
						</p>
						<div className="flex flex-col gap-4 text-lg text-[var(--color-white)]">
							<div className="flex items-center gap-2">
								<Instagram className="w-6 h-6" />
								<p>@marco_agostinello</p>
							</div>
							<div className="flex items-center gap-2">
								<Linkedin className="w-6 h-6" />
								<p>info@marcoagostinello.com</p>
							</div>
							<div className="flex items-center gap-2">
								<Github className="w-6 h-6" />
								<p>Marco Agostinello</p>
							</div>
							<div className="flex items-center gap-2">
								<Mail className="w-6 h-6" />
								<p>info@marcoagostinello.com</p>
							</div>
						</div>
					</div>
				</div>

				{/* Colonna destra - Form */}
				<form
					onSubmit={async (e) => {
						e.preventDefault();

						if (!validateForm()) return;

						const res = await fetch("/api/contact", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({ ...form, service: selectedOption }),
						});

						if (res.ok) {
							toast.success("Message sent successfully!");
							setForm({
								firstName: "",
								lastName: "",
								email: "",
								phone: "",
								message: "",
							});
						} else {
							const data = await res.json();
							toast.error(data.error || "Failed to send message.");
						}
					}}
					className="w-full md:w-1/2 p-10 bg-[var(--color-white)]"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="text-lg text-[var(--color-red)]">
								First Name
							</label>
							<input
								type="text"
								name="firstName"
								value={form.firstName}
								onChange={(e) =>
									setForm({ ...form, firstName: e.target.value })
								}
								className={inputClasses}
							/>
						</div>
						<div>
							<label className="text-lg text-[var(--color-red)]">
								Last Name
							</label>
							<input
								type="text"
								name="lastName"
								value={form.lastName}
								onChange={(e) => setForm({ ...form, lastName: e.target.value })}
								className={inputClasses}
							/>
						</div>
						<div>
							<label className="text-lg text-[var(--color-red)]">Email</label>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={(e) => setForm({ ...form, email: e.target.value })}
								className={inputClasses}
							/>
						</div>
						<div>
							<label className="text-lg text-[var(--color-red)]">Phone</label>
							<input
								type="tel"
								name="phone"
								value={form.phone}
								onChange={(e) => setForm({ ...form, phone: e.target.value })}
								className={inputClasses}
							/>
						</div>
					</div>

					<div className="mt-8 ">
						<p className="text-xl font-medium mb-3 text-[var(--color-red)]">
							What type of website do you need?
						</p>
						<div className="flex flex-wrap gap-4 text-[var(--color-black)]">
							{["Web Design", "Web Development", "Database", "Other"].map(
								(option) => (
									<label
										key={option}
										className="flex items-center gap-2 cursor-pointer"
									>
										<input
											type="radio"
											name="service"
											value={option}
											checked={selectedOption === option}
											onChange={() => setSelectedOption(option)}
											className="accent-[var(--color-red)]"
										/>
										<span className="text-lg">{option}</span>
									</label>
								)
							)}
						</div>
					</div>

					<div className="mt-8">
						<label className="text-lg text-[var(--color-red)]">Message</label>
						<textarea
							name="message"
							value={form.message}
							onChange={(e) => setForm({ ...form, message: e.target.value })}
							placeholder="Write your message here..."
							className="w-full border-b border-[var(--color-black)] bg-transparent text-[var(--color-black)] focus:outline-none focus:border-[var(--color-red)] transition h-24 resize-none"
						/>
					</div>

					<button
						type="submit"
						className="cursor-pointer mt-8 px-6 py-3 bg-[var(--color-red)] text-[var(--color-white)] rounded transition"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
}
