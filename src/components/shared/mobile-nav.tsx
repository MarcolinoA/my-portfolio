"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
	{ label: "Journey", href: "/" },
	{ label: "Projects", href: "/projects" },
	{ label: "Contacts", href: "/contacts" },
];

export default function MobileNavbar() {
	const pathname = usePathname();

	return (
		<nav className="lg:hidden mx-auto px-6 w-full max-w-7xl">
			<div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between w-full">
				{/* Logo in alto */}
				<div className="text-4xl font-risya text-[var(--color-red)] max-xs:order-1">
					Agostinello
				</div>

				{/* Menu al centro */}
				<div className="flex gap-4 max-xs:order-2 max-xs:flex-col max-xs:items-center">
					{menuItems.map(({ label, href }) => {
						const isActive = pathname === href;
						return (
							<Link key={href} href={href}>
								<span
									className={`text-lg font-clash uppercase ${
										isActive
											? "text-[var(--color-red)] underline underline-offset-4 decoration-[var(--color-red)]"
											: "text-[var(--color-black)]"
									}`}
								>
									{label}
								</span>
							</Link>
						);
					})}
				</div>

				{/* Social icons in basso */}
				<div className="flex flex-row items-center gap-4 max-xs:order-3">
					<Link href="">
						<Instagram className="w-7 h-7 text-[var(--color-red)]" />
					</Link>
					<Link href="">
						<Linkedin className="w-7 h-7 text-[var(--color-red)]" />
					</Link>
					<Link href="">
						<Github className="w-7 h-7 text-[var(--color-red)]" />
					</Link>
				</div>
			</div>
		</nav>
	);
}
