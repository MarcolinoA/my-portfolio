"use client"
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
		<div className="relative w-full h-[40vh] bg-[var(--color-white)] text-[var(--color-red)] rounded-lg overflow-hidden">
			<div className="flex items-center justify-center text-center h-full">
				<p className="text-xl font-light max-w-xl">{description[lang]}</p>
			</div>
		</div>
	);
}
