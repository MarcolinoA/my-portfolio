"use client";

import React from "react";
import Link from "next/link";
import Navbar from "./nav";

type BannerProps = {
	title: string;
	description: string;
};

export default function Banner({ title, description }: BannerProps) {
	return (
		<div className="relative w-full h-[40vh] bg-[#fcfbf6] text-black rounded-lg overflow-hidden">
			{/* Navbar centrata in alto */}
			<div className="absolute top-0 left-1/2 transform -translate-x-1/2">
				<Navbar />
			</div>

			{/* Descrizione in basso a sinistra */}
			<div className="absolute bottom-6 left-6">
				<p className="text-lg font-light max-w-xl">{description}</p>
			</div>

			{/* Icone in basso a destra */}
			<div className="absolute bottom-6 right-6 flex flex-row items-end gap-4">
				<Link href="" className="flex items-center gap-2">
					<img src="/insta.svg" alt="Instagram" className="w-12 h-11" />
				</Link>
				<Link href="" className="flex items-center gap-2">
					<img src="/github1.svg" alt="Github" className="w-12 h-12" />
				</Link>
				<Link href="" className="flex items-center gap-2">
					<img src="/linkedin.svg" alt="Linkedin" className="w-12 h-12" />
				</Link>
			</div>
		</div>
	);
}
