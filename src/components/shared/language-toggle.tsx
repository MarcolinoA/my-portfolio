"use client";

import { useLanguage } from "./language-context";

export default function LanguageToggle() {
	const { language, setLanguage } = useLanguage();

	return (
		<div className="flex flex-row gap-4 mt-6">
			<button
				onClick={() => setLanguage("en")}
				className={`cursor-pointer px-4 py-1 rounded text-md w-[50px] h-[40px] ${
					language === "en"
						? "bg-[var(--color-red)] text-[var(--color-white)]"
						: "bg-[var(--color-black)] text-[var(--color-white)]"
				}`}
			>
				EN
			</button>
			<button
				onClick={() => setLanguage("it")}
				className={`cursor-pointer px-4 py-1 rounded text-md w-[50px] h-[40px] ${
					language === "it"
						? "bg-[var(--color-red)] text-[var(--color-white)]"
						: "bg-[var(--color-black)] text-[var(--color-white)]"
				}`}
			>
				IT
			</button>
		</div>
	);
}
