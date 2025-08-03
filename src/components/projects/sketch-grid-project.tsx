"use client";

import React from "react";
import "../card/sketch-grid.css";
import { motion } from "framer-motion";
import SketchCardProject from "./sketch-card-project";

type SketchItem = {
	imageSrc: string;
	title: string;
	extDesc: {
		it: string;
		en: string;
	};
	area: string;
	inProgress?: boolean;
};

const sketches: SketchItem[] = [
	{
		imageSrc: "/projects/santamarta.png",
		title: "Beanz #18852",
		extDesc: {
			it: "Il mio viaggio nel tech ha il via grazie al boom degli NFT. Avevo bisogno di guadagnare un po' di soldi e con questo intento, tra i 14 e i 15 anni,  su consiglio di un cugino, ho iniziato a studiare per capire cosa fossero queste immagini,  ma soprattutto a cosa servissero. Nel tempo per me questo interesse è diventato molto di più che solo economico, ho iniziato a credere veramente nell'innovazione e lo faccio ancora! Tornando al Beanz #18852 ti basti sapere per ora che pur non avendo i fondi necessari per mintare ciò da cui lui deriva sono stato abile nell'essere tra i pochi ad ottenere la whitelist e fortunato nel trovare le persone giuste al momento giusto",
			en: "My tech journey kicks off thanks to the NFT boom. I needed to earn some money and with this intent, between the ages of 14 and 15, on the advice of a cousin, I started studying to understand what these images were, but above all what they were for. Over time for me this interest has become much more than just economic, I have started to truly believe in innovation and I still do! Returning to Beanz #18852, just know for now that despite not having the necessary funds to undermine what he comes from, I was skilled at being among the few to get the whitelist and lucky to find the right people at the right time",
		},
		area: "prj1",
	},
	{
		imageSrc: "/sketches/iconsnbg.png",
		title: "Introduction to React",
		extDesc: {
			it: "Il percorso nel mondo degli NFT è stato tortuoso: dopo aver venduto quel Beanz mi sono ritrovato a detenere diverse migliaia di euro in mano ma più che gestirli razionalmente il problema è stato non fiutare il concreto pericolo di un crollo del mercato, purtroppo così è stato. Dopo una pausa necessaria per recuperare la mia salute mentale, ho iniziato, su consiglio di un amico, ad avvicinarmi a React non sapendo nemmeno cosa fosse un framework. Ho iniziato con progetti stupidi e semplici ma l'ho abbandonato poco dopo perché non pensavo fosse la mia strada, non mi divertiva",
			en: "The path in the world of NFTs was tortuous: after selling that Beanz I found myself holding several thousand euros in my hands but rather than managing them rationally the problem was not sensing the real danger of a market collapse, unfortunately this was the case. After a break needed to recover my mental health, I began, on the advice of a friend, to approach React not even knowing what a framework was. I started with stupid and simple projects but abandoned it shortly after because I didn't think it was my path, I didn't enjoy it",
		},
		area: "prj2", 
	},
	{
		imageSrc: "/sketches/wireshark.png",
		title: "Wireshark",
		extDesc: {
			it: "Per cercare nuovi stimoli e interessi mi sono avvicinato a Wireshark, il mondo della cybersecurity è molto più complesso e intricato di quello della programmazione. Questa mia parentesi è stata breve ma fondamentale per capire quali siano i miei interessi e quale sia il percorso più adatto a me (non ho ancora delle risposte LOL). Ad ogni modo in quel periodo ho usato alcuni tool e guardato tutorial pratici e teorici su yt ma ho abbandonato questa strada, anzi l'ho lasciata in sospeso: mi piace, mi incuriosisce e penso che, con i giusti presupposti, potrebbe essere un'opzione per il mio futuro...chissà",
			en: "To seek new stimuli and interests I approached Wireshark, the world of cybersecurity is much more complex and intricate than that of programming. This parenthesis of mine was short but fundamental to understand what my interests are and which path is best suited to me (I don't have any LOL answers yet). In any case, in that period I used some tools and watched practical and theoretical tutorials on yt but I abandoned this path, in fact I left it pending: I like it, I'm curious and I think that, with the right assumptions, it could be an option for my future...who knows",
		},
		area: "prj3",
	},
];

export default function SketchGridProject() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.1 }}
				className="custom-grid3 py-6"
			>
				{sketches.map((sketch, index) => (
					<div key={index} className={`area-${sketch.area}`}>
						<SketchCardProject {...sketch} />
					</div>
				))}
			</motion.div>
		</>
	);
}
