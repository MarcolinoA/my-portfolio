import ContactSection from "@/components/contacts/contact-section";
import Banner from "@/components/shared/banner";

export default function Page() {
	return (
		<main className="bg-[var(--color-black)] min-h-screen flex flex-col items-center py-8">
			<div className="w-full max-w-6xl">
				<Banner
					title="Marco Agostinello"
					description={{
						en: "Choose the best for your business by giving it a website! Attract new customers by creating one from scratch or giving a new look to what's already online. Tell me about your ideas through links to social channels or by writing to me by filling out the form below",
						it: `Scegli il meglio per la tua attività regalandole un sito web! Attrai nuovi clienti creandone uno da zero o dando una nuova veste grafica a ciò che è già online. Parlami delle tue idee attraverso i link ai canali social o scrivendomi compilando il form in basso`,
					}}
				/>
				<ContactSection />
			</div>
		</main>
	);
}
