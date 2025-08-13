"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Navbar from "./nav";
import MobileNavbar from "./mobile-nav";
import LanguageToggle from "./language-toggle";
import { useLanguage } from "./language-context";

type BannerProps = {
	title?: string;
	description: {
		it: string;
		en: string;
	};
};

export default function Banner({ title, description }: BannerProps) {
	const { language: lang } = useLanguage();

	return (
		<div className="px-6">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="relative w-full h-auto bg-[var(--color-white)] text-[var(--color-black)] rounded-lg overflow-hidden p-6"
			>
				<div className="hidden lg:block">
					<Navbar />
				</div>
				<div className="block lg:hidden mb-4">
					<MobileNavbar />
				</div>

				{/* Contenuto centrale */}
				<div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
					{/* Descrizione */}
					<div className="text-center lg:text-left max-w-xl">
						<p className="text-lg font-light">{description[lang]}</p>
					</div>

					{/* Icone + toggle */}
					<div className="hidden lg:flex flex-row items-end gap-4">
						<LanguageToggle />
						<div className="flex gap-4">
							<Link href="https://www.instagram.com/marco_agostinello">
								<Instagram className="w-8 h-8 text-[var(--color-red)]" />
							</Link>
							<Link href="">
								<Linkedin className="w-8 h-8 text-[var(--color-red)]" />
							</Link>
							<Link href="https://github.com/MarcolinoA">
								<Github className="w-8 h-8 text-[var(--color-red)]" />
							</Link>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
