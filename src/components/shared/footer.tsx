"use client";
import { div } from "framer-motion/client";
import { useLanguage } from "./language-context";

type FooterProps = {
	description: {
		it: string;
		en: string;
	};
};

export default function Footer({ description }: FooterProps) {
	const { language: lang } = useLanguage();

	return (
		<div className="px-5">
			<div className="relative w-full h-auto bg-gradient-to-br from-white to-[var(--color-white)] text-[var(--color-red)] rounded-lg overflow-hidden px-6 py-12">
				<div className="flex flex-col items-center justify-center h-full text-center gap-4">
					<h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide">
						Trust the Process
					</h2>
					<p className="text-lg sm:text-xl font-light max-w-2xl text-[var(--color-red)]">{description[lang]}</p>
					<p className="italic text-sm text-gray-500">
						{lang === "it"
							? "Ogni sforzo, ogni errore, ogni passo. Tutto conta."
							: "Every stroke, every mistake, every step. It all matters."}
					</p>
				</div>
			</div>
		</div>
	);
}
