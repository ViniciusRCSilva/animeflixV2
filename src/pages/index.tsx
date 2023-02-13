import FeaturedContent from "@/components/FeaturedContent";
import TitleLogo from '../../public/logo-dragon-ball-z.png'
import AnimeSliders from "@/components/AllAnimeSliders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <FeaturedContent logo={TitleLogo} backgroundImage='https://i.pinimg.com/originals/d8/fc/f9/d8fcf96a55264b304b8046f8cfc7b472.jpg' />

      <AnimeSliders/>

      <Footer/>
    </div>
  )
}
