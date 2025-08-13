"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const menuItems = [
	{ label: "Journey", href: "/" },
	{ label: "Projects", href: "/projects" },
	{ label: "Contacts", href: "/contacts" },
];

// #161716 nero
// #bd3649 rosso
// #fffeff bianco

export default function Navbar() {
	const [hovered, setHovered] = useState(false);
	const pathname = usePathname();
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handlePointerEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setHovered(true);
	};

	const handlePointerLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setHovered(false);
		}, 150); // attende 150ms prima di chiudere
	};

	return (
		<nav className="relative z-10 flex justify-center w-full">
			<div
				className="relative"
				onPointerEnter={handlePointerEnter}
				onPointerLeave={handlePointerLeave}
			>
				{/* Estensione invisibile ai lati */}
				<div className="absolute -left-8 top-0 w-8 h-full pointer-events-auto" />
				<div className="absolute -right-8 top-0 w-8 h-full pointer-events-auto" />

				{/* Contenitore vero e proprio */}
				<div
					className={`m-2 bg-[var(--color-white)] text-[var(--color-red)] rounded-none flex flex-col items-center transition-all duration-500 ease-in-out ${
						hovered ? "w-[300px]" : "w-[400px]"
					}`}
				>
					{/* Logo */}
					<div
						className={`cursor-pointer relative transition-all duration-500 ease-in-out rounded-b-xl h-12 mb-2 ${
							hovered ? "w-[300px]" : "w-[400px]"
						}`}
					>
						<div className="h-2 w-full pointer-events-none" />
						<h1
							className={`font-risya absolute top-1/2 -translate-y-1/2 text-4xl transition-all duration-500 ease-in-out ${
								hovered
									? "left-1/2 -translate-x-1/2 text-center"
									: "left-4 text-left"
							}`}
						>
							Agostinello
						</h1>

						<div
							className={`absolute top-1/2 right-4 -translate-y-1/2 w-3 h-3 rounded-xl bg-[var(--color-red)] transition-opacity duration-500 ${
								hovered ? "opacity-0" : "opacity-100"
							}`}
						/>
					</div>

					{/* Menu */}
					<div
						className={`transition-all duration-500 ease-in-out ${
							hovered
								? "opacity-100 delay-100 pointer-events-auto"
								: "opacity-0 delay-200 pointer-events-none"
						} bg-[#fcfbf6] w-[600px] h-[60px] flex justify-center items-center gap-4 px-6`}
					>
						{menuItems.map(({ label, href }) => {
							const isActive = pathname === href;
							return (
								<Link key={href} href={href}>
									<div
										className={`group relative h-14 w-24 flex items-center justify-center rounded-xl overflow-hidden text-[var(--color-black)]`}
									>
										<div className="flex flex-col items-center justify-center relative">
											<div className="transition-all duration-200 group-hover:translate-y-3 group-hover:opacity-0">
												<div
													className={`w-3 h-3 rounded-full ${
														isActive
															? "bg-[var(--color-red)]"
															: "bg-[var(--color-red)]"
													}`}
												/>
											</div>
											<div className="h-1" />
											<span
												className={`transition-all duration-200 translate-y-0 group-hover:-translate-y-2 text-lg font-clash light uppercase ${
													isActive
														? "underline underline-offset-4 decoration-[var(--color-red)]"
														: ""
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
