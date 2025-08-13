"use client";

import React from "react";
import "./sketch-grid.css";
import { motion } from "framer-motion";
import SketchCardAbout from "./sketch-card-about";

type SketchItem = {
	id: string;
	date: string;
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
		id: "001",
		date: "2021-2022",
		imageSrc: "/sketches/beanznbg.png",
		title: "Beanz #18852",
		extDesc: {
			it: "Il mio viaggio nel tech ha il via grazie al boom degli NFT. Avevo bisogno di guadagnare un po' di soldi e con questo intento, tra i 14 e i 15 anni,  su consiglio di un cugino, ho iniziato a studiare per capire cosa fossero queste immagini,  ma soprattutto a cosa servissero. Nel tempo per me questo interesse è diventato molto di più che solo economico, ho iniziato a credere veramente nell'innovazione e lo faccio ancora! Tornando al Beanz #18852 ti basti sapere per ora che pur non avendo i fondi necessari per mintare ciò da cui lui deriva sono stato abile nell'essere tra i pochi ad ottenere la whitelist e fortunato nel trovare le persone giuste al momento giusto",
			en: "My tech journey kicks off thanks to the NFT boom. I needed to earn some money and with this intent, between the ages of 14 and 15, on the advice of a cousin, I started studying to understand what these images were, but above all what they were for. Over time for me this interest has become much more than just economic, I have started to truly believe in innovation and I still do! Returning to Beanz #18852, just know for now that despite not having the necessary funds to undermine what he comes from, I was skilled at being among the few to get the whitelist and lucky to find the right people at the right time",
		},
		area: "big", // 2x2
	},
	{
		id: "002",
		date: "2023",
		imageSrc: "/sketches/iconsnbg.png",
		title: "Introduction to React",
		extDesc: {
			it: "Il percorso nel mondo degli NFT è stato tortuoso: dopo aver venduto quel Beanz mi sono ritrovato a detenere diverse migliaia di euro in mano ma più che gestirli razionalmente il problema è stato non fiutare il concreto pericolo di un crollo del mercato, purtroppo così è stato. Dopo una pausa necessaria per recuperare la mia salute mentale, ho iniziato, su consiglio di un amico, ad avvicinarmi a React non sapendo nemmeno cosa fosse un framework. Ho iniziato con progetti stupidi e semplici ma l'ho abbandonato poco dopo perché non pensavo fosse la mia strada, non mi divertiva",
			en: "The path in the world of NFTs was tortuous: after selling that Beanz I found myself holding several thousand euros in my hands but rather than managing them rationally the problem was not sensing the real danger of a market collapse, unfortunately this was the case. After a break needed to recover my mental health, I began, on the advice of a friend, to approach React not even knowing what a framework was. I started with stupid and simple projects but abandoned it shortly after because I didn't think it was my path, I didn't enjoy it",
		},
		area: "tall", // 1x2
	},
	{
		id: "003",
		date: "2023",
		imageSrc: "/sketches/wireshark.png",
		title: "Wireshark",
		extDesc: {
			it: "Per cercare nuovi stimoli e interessi mi sono avvicinato a Wireshark, il mondo della cybersecurity è molto più complesso e intricato di quello della programmazione. Questa mia parentesi è stata breve ma fondamentale per capire quali siano i miei interessi e quale sia il percorso più adatto a me (non ho ancora delle risposte LOL). Ad ogni modo in quel periodo ho usato alcuni tool e guardato tutorial pratici e teorici su yt ma ho abbandonato questa strada, anzi l'ho lasciata in sospeso: mi piace, mi incuriosisce e penso che, con i giusti presupposti, potrebbe essere un'opzione per il mio futuro...chissà",
			en: "To seek new stimuli and interests I approached Wireshark, the world of cybersecurity is much more complex and intricate than that of programming. This parenthesis of mine was short but fundamental to understand what my interests are and which path is best suited to me (I don't have any LOL answers yet). In any case, in that period I used some tools and watched practical and theoretical tutorials on yt but I abandoned this path, in fact I left it pending: I like it, I'm curious and I think that, with the right assumptions, it could be an option for my future...who knows",
		},
		area: "small1", // 1x1
	},
	{
		id: "004",
		date: "2024",
		imageSrc: "/sketches/jestmdbnbg.png",
		title: "Back to Web Development",
		extDesc: {
			it: "Nel tempo ho capito che il mio desiderio più grande, almeno per ora, è lo sviluppo blockchain ma ho bisogno di una fonte di reddito, qualcosa che mi permetta contemporaneamente di rimanere attivo in questo ambiente e di guadagnare, sostituendo così il lavoro estivo da cameriere. Lo sviluppatore web freelance è stata la scelta perfetta! Ho iniziato alcuni progetti per piccole attività nella mia città, da questi ho imparato che prima di iniziare un lavoro è necessario un acconto! Quello che ho creato in questo periodo sono stati un database per la gestione di una palestra e un sito vetrina per un ristorante che non sono mai stati venduti ma mi hanno insegnato molto.",
			en: "Over time I have understood that my greatest desire, at least for now, is blockchain development but I need a source of income, something that allows me to simultaneously remain active in this environment and earn money, thus replacing the summer job as a waiter. The freelance web developer was the perfect choice! I started some projects for small businesses in my city, from these I learned that before starting a job you need a deposit! What I created during this time was a database for running a gym and a showcase site for a restaurant that were never sold but taught me a lot.",
		},
		area: "small2", // 1x1
	},
];

const sketches2: SketchItem[] = [
	{
		id: "005",
		date: "2025",
		imageSrc: "/sketches/soliditynbg.png",
		title: "Blockchain Development (Solidity)",
		extDesc: {
			it: "Il mio primo approccio allo sviluppo blockchain è stato con Solidity. Purchè questo framework sia il più famoso e trovare materiale di studio su di esso non è un problema. Non ho avuto un buon impatto con la sintassi e l'ambiente di sviluppo, perciò sono andato oltre piuttosto presto ma ciò non significa che un giorno, per piacere o bisogno, non potrò ricominciare ad utilizzarlo. Non voglio escludere nessuna strada, siamo solo all'inizio!",
			en: "My first approach to blockchain development was with Solidity. As long as this framework is the most famous and finding study material on it is not a problem. I haven't had a good impact with the syntax and development environment, so I went further rather early but that doesn't mean that one day, for pleasure or need, I won't be able to start using it again. I don't want to rule out any roads, we're just at the beginning!",
		},
		area: "small4", // 1x1
	},
	{
		id: "006",
		date: "2025",
		imageSrc: "/sketches/solananbg.png",
		title: "Blockchain Development (Solana)",
		extDesc: {
			it: "Cercando di trovare la strada giusta mi sono avvicinato a Solana con più serietà e convinzione, ho iniziato leggendo attentamente il whitepaper, cercando di capire la differenza tecnologica tra questa criptovaluta e le altre, in particolare Bitcoin ed Ethereum. Ho imparato qualcosa attraverso il canale YT ufficiale di Solana e i suoi tutorial per sviluppatori nei quali utilizzano principalmente il framework Anchor, basato su Rust. Tuttavia, il mio studio dovrebbe essere più costante, posso e devo fare di più approfondendo magari anche Rust stesso!",
			en: "Trying to find the right path I approached Solana with more seriousness and conviction, I started by carefully reading the whitepaper, trying to understand the technological difference between this cryptocurrency and the others, in particular Bitcoin and Ethereum. I learned something through Solana's official YT channel and its developer tutorials in which they mainly use the Anchor framework, based on Rust. However, my study should be more constant, I can and must do more by perhaps even delving deeper into Rust itself!",
		},
		area: "small3", // 1x1
	},
	{
		id: "007",
		date: "2025",
		imageSrc: "/sketches/nextjsnbg.png",
		title: "Hi, I'm Marco, a freelancer full stack developer",
		extDesc: {
			it: "Il breve racconto della mia esperienza nel mondo tech termina qui, il mio portfolio sarà online nell'agosto 2025. In questo momento, o almeno per questa estate, sono riuscito a raggiungere il primo degli obiettivi che mi sono prefissato nel tempo: sostituire il lavoro da cameriere con quello da sviluppatore. Nel frattempo continuerò a studiare: sono pronto ad iniziare il mio percorso in ingegneria al Politecnico di Torino ma soprattutto continuerò ad impegnarmi nello studio da casa, che avvenga nella mia cameretta nel sud o in un monolocale nel nord italia non fa differenza, mi basta un pc, internet e la solita voglia di imparare",
			en: "The short story of my experience in the tech world ends here, my portfolio will be online in August 2025. At this moment, or at least for this summer, I managed to achieve the first of the goals I have set myself over time: replacing the job of a waiter with that of a developer. In the meantime I will continue to study, I am ready to start my career in engineering at the Polytechnic of Turin but above all I will continue to work at home, whether it is my bedroom or that of a studio apartment in northern Italy it makes no difference, all I need is a PC, YouTube and a great desire to learn",
		},
		area: "big2", // 2x2
	},
	{
		id: "008",
		date: "???",
		imageSrc: "/sketches/rasberrypinbg.png",
		title: "",
		extDesc: {
			it: "",
			en: "",
		},
		area: "tall2", // 1x2
		inProgress: true,
	},
];

export default function SketchGridAbout() {

	
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.1 }}
				className="custom-grid p-6 pt-6"
			>
				{sketches.map((sketch) => (
					<div key={sketch.id} className={`area-${sketch.area}`}>
						<SketchCardAbout {...sketch} />
					</div>
				))}
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className="custom-grid2 px-6 pb-6"
			>
				{sketches2.map((sketch) => (
					<div key={sketch.id} className={`area-${sketch.area}`}>
						<SketchCardAbout {...sketch} />
					</div>
				))}
			</motion.div>
		</>
	);
}
