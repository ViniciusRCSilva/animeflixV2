import AnimeSliders from "@/components/AllAnimeSliders";
import Footer from "@/components/Footer";
import RandomizeFeaturedContent from "@/components/RandomizeFeaturedContent";

export default function Series() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden animate-screenOpacity">
      <RandomizeFeaturedContent/>

      <AnimeSliders/>

      <Footer/>
    </div>
  )
}