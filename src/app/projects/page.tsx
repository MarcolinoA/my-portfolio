import SketchGridProject from "@/components/projects/sketch-grid-project";
import Banner from "@/components/shared/banner";
import Footer from "@/components/shared/footer";

export default function Page() {
	return (
		<main className="bg-[var(--color-black)] min-h-screen flex flex-col items-center py-8">
			<div className="w-full max-w-6xl">
				<Banner
					title="Marco Agostinello"
					description={{
						en: `Welcome to the "projects" section here you will find everything I have created and published. Click on the cards to be rendered to the site and to start getting an idea of the type of project that's right for you. When you're done, continue to the third and final page to understand how we can get in touch!`,
						it: `Benvenuto nella sezione "projects" qui troverai tutto quello che ho creato e pubblicato. Fai click sulle card per essere renderizzato al sito e per iniziare a farti un'idea sul tipo di progetto che fa per te. Quando hai terminato prosegui il verso la terza ed ultima pagina per capire in che modo possiamo metterci in contatto!`,
					}}
				/>
				<SketchGridProject />
				<Footer
					description={{
						en: `Thank you for taking part in my journey, know that everything I have learned in recent years is the result of the infinite desire to do, it is still very little but I work day by day to do better. I am passionate about this sector and being in this world makes me proud.
						Scrolling you will find my first projects, take a look and remember that you are in the right place to increase the level of your business! Trust the process!`,
						it: `Grazie per aver preso parte al mio viaggio, sappi che tutto ciò che ho imparato in questi ultimi anni è frutto dell'infinita voglia di fare, è ancora veramente poco ma lavoro giorno per giorno per fare meglio. Questo settore mi appassiona e essere in questo mondo mi rende fiero.
						Scrollando troverai i miei primi progetti, dai un occhiata e ricorda che sei nel posto giusto per incrementare il livello della tua attività! Trust the process!`,
					}}
				/>
			</div>
		</main>
	);
}
