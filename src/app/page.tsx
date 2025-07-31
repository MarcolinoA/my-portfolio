import Banner from "@/components/banner";
import SketchGrid from "@/components/card/sketch-grid";
import Navbar from "@/components/navbar";

export default function Home() {
	return (
		<main className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
			<div className="w-full max-w-6xl">
				<Banner
					title="Marco Agostinello"
					description="Marco Agostinello is a junior full stack developer, he becomes
						passionate about the world of tech, approaching NFTs and from that
						moment on he will make the PC his best friend. Discover his story,
						the projects he has worked on and those planned but above all
						discover how to make your business make a leap in quality"
				/>
				<SketchGrid />
			</div>
		</main>
	);
}
