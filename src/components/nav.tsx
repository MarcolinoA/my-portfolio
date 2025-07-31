"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Projects", href: "/offer" },
	{ label: "Contacts", href: "/offer" },
];

export default function Navbar() {
	const [hovered, setHovered] = useState(false);
	const pathname = usePathname();

	return (
		<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
			<div
				className={`bg-[#fcfbf6] text-black rounded-none flex flex-col items-center transition-all duration-500 ease-in-out ${
					hovered ? "w-[300px]" : "w-[400px]"
				}`}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				{/* Logo */}
				<div
					className={`relative transition-all duration-500 ease-in-out rounded-b-xl h-12 ${
						hovered ? "w-[300px]" : "w-[400px]"
					}`}
				>
					<h1
						className={`absolute top-1/2 -translate-y-1/2 font-semibold text-3xl transition-all duration-500 ease-in-out ${
							hovered
								? "left-1/2 -translate-x-1/2 text-center"
								: "left-4 text-left"
						}`}
					>
						Agostinello
					</h1>

					<div
						className={`absolute top-1/2 right-4 -translate-y-1/2 w-3 h-3 rounded-xl bg-[var(--background)] transition-opacity duration-500 ${
							hovered ? "opacity-0" : "opacity-100"
						}`}
					/>
				</div>

				<div
					className={`transition-all duration-500 ease-in-out overflow-hidden rounded-xl ${
						hovered
							? "h-[60px] scale-x-100 opacity-100"
							: "h-0 scale-x-0 opacity-0"
					} origin-center`}
				>
					<div
						className={`transition-all duration-500 ease-in-out ${
							hovered
								? "opacity-100 delay-100"
								: "opacity-0 delay-200 pointer-events-none"
						} bg-[#fcfbf6] w-[600px] h-[60px] flex justify-center items-center gap-4 px-6`}
					>
						{menuItems.map(({ label, href }) => {
							const isActive = pathname === href;
							return (
								<Link key={href} href={href}>
									<div
										className={`group relative h-14 w-24 flex items-center justify-center rounded-xl overflow-hidden text-[var(--background)]`}
									>
										<div className="flex flex-col items-center justify-center relative">
											<div className="transition-all duration-200 group-hover:translate-y-3 group-hover:opacity-0">
												<div
													className={`w-3 h-3 rounded-full ${
														isActive
															? "bg-black"
															: "bg-black"
													}`}
												/>
											</div>
											<div className="h-1" />
											<span
												className={`transition-all duration-200 translate-y-0 group-hover:-translate-y-2 text-sm font-clash light uppercase ${
													isActive ? "underline underline-offset-4" : ""
												}`}
											>
												{label}
											</span>
										</div>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
}
