"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useLanguage } from "../shared/language-context";
import LanguageToggle from "../shared/language-toggle";

type SketchCardProps = {
	id: string;
	date: string;
	imageSrc: string;
	title: string;
	extDesc: {
		it: string;
		en: string;
	};
	inProgress?: boolean;
};

export default function SketchCardAbout({
	id,
	date,
	imageSrc,
	title,
	extDesc,
	inProgress = false,
}: SketchCardProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const { language, setLanguage } = useLanguage();

	return (
		<>
			{/* Card */}
			<div
				className={`group relative cursor-pointer transition-colors duration-300 rounded-lg shadow-md px-6 py-6 w-full h-full ${
					inProgress
						? "bg-[var(--color-white)]"
						: "bg-[var(--color-white)] hover:bg-[var(--color-black)]"
				}`}
				onClick={() => setIsOpen(true)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
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

				{/* Testo sopra */}
				<div className="font-risya flex justify-between text-[var(--color-red)] mb-2 group-hover:text-[var(--color-white)] transition-colors relative z-20 text-2xl">
					<span>{date}</span>
					<span className="font-medium">ID {id}</span>
				</div>

				{/* Immagine */}
				<div className="relative w-full h-full flex justify-center items-center z-0">
					<Image
						src={imageSrc}
						alt={`Sketch ${id}`}
						width={300}
						height={225}
						className="object-contain max-h-full max-w-full transition duration-300"
					/>
				</div>
			</div>

			{/* Modal */}
			{isOpen && !inProgress && (
				<div className="fixed inset-0 z-50 bg-[var(--color-black)] backdrop-blur-md overflow-y-auto p-6 lg:flex lg:items-center lg:justify-center">
					<div className="bg-[var(--color-white)] text-[var(--color-black)] w-full max-w-6xl mx-auto rounded-xl overflow-visible flex flex-col lg:flex-row transform scale-95 animate-scale-in relative lg:h-[95vh]">
						{/* Immagine */}
						<div className="w-full lg:w-1/2 flex items-center justify-center p-6">
							<Image
								src={imageSrc}
								alt={`Sketch ${id}`}
								width={300}
								height={225}
								className="object-contain max-h-full max-w-full transition duration-300"
							/>
						</div>

						{/* Descrizione */}
						<div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:justify-center lg:items-start p-6">
							<p className="text-[var(--color-red)] text-lg mb-0">
								<strong>{date}</strong>
							</p>
							<p className="text-[var(--color-red)] text-lg mb-2">
								Sketch ID {id}
							</p>
							<h2 className="text-[var(--color-red)] text-3xl font-bold mb-2 text-center lg:text-left">
								{title}
							</h2>
							<p
								className="text-[var(--color-black)] text-xl leading-relaxed transition-all duration-500 ease-in-out opacity-0 animate-fade-in-lang text-center lg:text-left"
								key={language}
							>
								{extDesc[language]}
							</p>

							<LanguageToggle />

							{/* Pulsante chiusura */}
							<button
								onClick={() => setIsOpen(false)}
								className="cursor-pointer w-[300px] lg:w-[150px] h-[50px] mt-6 lg:m-0 self-center lg:self-end lg:absolute lg:top-8 lg:right-8 group flex items-center justify-center bg-[var(--color-red)] lg:bg-[var(--color-black)] text-[var(--color-white)] rounded-lg p-2 border lg:border-[var(--color-black)] hover:bg-[var(--color-red)] hover:text-[var(--color-white)] hover:border-none transition-all duration-500 z-50"
							>
								<span className="transition-all duration-500">
									Trust the process →
								</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
