import SketchGridAbout from "@/components/card/sketch-grid-about";
import Banner from "@/components/shared/banner";
import Footer from "@/components/shared/footer";
import MotionWrapper from "@/components/shared/motion-wrapper";

export default function Home() {
	return (
		<main className="bg-[var(--color-black)] min-h-screen flex flex-col items-center py-8">
			<div className="w-full max-w-6xl">
				<Banner
					title="Marco Agostinello"
					description={{
						en: `Hi, I'm Marco Agostinello: a full stack junior developer. Welcome to my portfolio, scroll through the cards and click on them to discover my path, let your IDs guide you. 
							Remember as you read about me that I'm just starting out and that there's still a lot of work to do! 
							Trust The Process!`,
						it: `Ciao, sono Marco Agostinello: uno sviluppatore full stack junior. Benvenuto nel mio portfolio, scorri tra le card e cliccaci sopra per scoprire il mio percorso, lascia che siano i tuoi ID a guidarti. 
							Ricorda, mentre leggi di me, che sono solo all'inizio e che c'è ancora tanto lavoro da fare! 
							Fidati del processo!`,
					}}
				/>
				<SketchGridAbout />
				<MotionWrapper>
					<Footer
					description={{
						en: `Thank you for taking part in my journey, know that everything I have learned in recent years is the result of the infinite desire to do, it is still very little but I work day by day to do better. I am passionate about this sector and being in this world makes me proud.
						Scrolling you will find my first projects, take a look and remember that you are in the right place to increase the level of your business! Trust the process!`,
						it: `Grazie per aver preso parte al mio viaggio, sappi che tutto ciò che ho imparato in questi ultimi anni è frutto dell'infinita voglia di fare, è ancora veramente poco ma lavoro giorno per giorno per fare meglio. Questo settore mi appassiona e essere in questo mondo mi rende fiero.
						Scrollando troverai i miei primi progetti, dai un occhiata e ricorda che sei nel posto giusto per incrementare il livello della tua attività! Trust the process!`,
					}}
					/>
				</MotionWrapper>
			</div>
		</main>
	);
}
