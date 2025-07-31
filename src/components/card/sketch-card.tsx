'use client';

import Image from "next/image";
import React from "react";

type SketchCardProps = {
	id: string;
	date: string;
	imageSrc: string;
};

export default function SketchCard({ id, date, imageSrc }: SketchCardProps) {
	return (
		<div className="group bg-[#fcfbf6] hover:bg-black transition-colors duration-300 rounded-lg shadow-md px-6 py-6 relative w-full h-full">
			<div className="flex justify-between text-xs text-gray-500 mb-2 group-hover:text-white transition-colors">
				<span>{date}</span>
				<span className="font-medium">ID {id}</span>
			</div>
			<div className="relative w-full h-full flex justify-center items-center">
				<Image
					src={imageSrc}
					alt={`Sketch ${id}`}
					width={300}
					height={225}
					className="object-contain max-h-full max-w-full transition duration-300 group-hover:invert"
				/>
			</div>
		</div>
	);
}
