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
	bgColor?: string;
};

export default function SketchCardProject({
	imageSrc,
	title,
	extDesc,
	inProgress = false,
	bgColor, 
}: SketchCardProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [lang, setLang] = useState<"it" | "en">("en");

	return (
		<>
			{/* Card */}
			<div
				className={`group relative cursor-pointer transition-colors duration-300 rounded-lg shadow-md px-6 py-6 w-full h-full ${bgColor}`}
				onClick={() => setIsOpen(true)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* Overlay "in progress" */}
				{inProgress && isHovered && (
					<div className="absolute inset-0 flex flex-col justify-center items-center rounded-lg z-10 bg-white/90 pointer-events-none">
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