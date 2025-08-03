"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";
import Navbar from "./nav";
import { useLanguage } from "./language-context";
import LanguageToggle from "./language-toggle";

type BannerProps = {
	title: string;
	description: {
		it: string;
		en: string;
	};
};

export default function Banner({ title, description }: BannerProps) {
	const { language: lang } = useLanguage();

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="relative w-full h-[40vh] bg-[var(--color-white)] text-[var(--color-black)] rounded-lg overflow-hidden"
		>
			<div className="relative w-full h-[40vh] bg-[var(--color-white)] text-[var(--color-black)] rounded-lg overflow-hidden">
				{/* Navbar centrata in alto */}
				<div className="absolute top-0 left-1/2 transform -translate-x-1/2">
					<Navbar />
				</div>

				{/* Descrizione in basso a sinistra */}
				<div className="absolute bottom-6 left-6 text-[var(--color-black)]">
					<p className="text-xl font-light max-w-xl mt-2">{description[lang]}</p>
				</div>

				{/* Icone in basso a destra */}
				<div className="absolute bottom-6 right-6 flex flex-row items-end gap-4">
					<LanguageToggle />
					<Link href="" className="flex items-center gap-2">
						<Instagram className="w-10 h-10 text-[var(--color-red)]"/>
					</Link>
					<Link href="" className="flex items-center gap-2">
						<Linkedin className="w-10 h-10 text-[var(--color-red)]"/>
					</Link>
					<Link href="" className="flex items-center gap-2">
						<Github className="w-10 h-10 text-[var(--color-red)]"/>
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
