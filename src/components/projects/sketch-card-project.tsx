"use client";

import Image from "next/image";
import React, { useState } from "react";

type SketchCardProps = {
	imageSrc: string;
	title: string;
	extDesc: {
		it: string;
		en: string;
	};
	inProgress?: boolean;
};

export default function SketchCardProject({
	imageSrc,
	title,
	inProgress = false,
}: SketchCardProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [lang, setLang] = useState<"it" | "en">("en");

	return (
		<>
			{/* Card */}
			<div
				className={`group relative cursor-pointer transition-colors duration-300 rounded-lg shadow-md px-6 py-6 w-full h-full bg-[var(--color-white)]`}
				onClick={() => setIsOpen(true)}
			>
				{inProgress && isHovered && (
					<div className="absolute inset-0 flex flex-col justify-center items-center rounded-lg z-10 bg-[var(--color-white)] pointer-events-none">
						<Image
							src="/hourglass.png"
							alt="In progress"
							width={150}
							height={150}
							className="opacity-80 mb-4"
						/>
					</div>
				)}

				{/* Immagine */}
				<div className="relative w-full h-full flex justify-center items-center z-0">
					<Image
						src={imageSrc}
						alt="Sketch"
						width={300}
						height={225}
						className="object-contain max-h-full max-w-full transition duration-300"
					/>
				</div>
			</div>
		</>
	);
}