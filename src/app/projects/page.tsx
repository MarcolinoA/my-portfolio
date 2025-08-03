import SketchGridProject from "@/components/projects/sketch-grid-project";
import Banner from "@/components/shared/banner";

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
			</div>
		</main>
	);
}
