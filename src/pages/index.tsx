import FeaturedContent from "@/components/FeaturedContent";
import AnimeSliders from "@/components/AllAnimeSliders";
import Footer from "@/components/Footer";

function logoLink(){
  const link = "https://i.pinimg.com/originals/60/a9/61/60a96199afa8469b7c3c46810ed86816.png"

  return link
}

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden animate-screenOpacity">
      <FeaturedContent logo={logoLink()} backgroundImage='https://i.pinimg.com/originals/d8/fc/f9/d8fcf96a55264b304b8046f8cfc7b472.jpg' />

      <AnimeSliders/>

      <Footer/>
    </div>
  )
}
