import FeaturedContent from "@/components/FeaturedContent";
import AnimeSliders from "@/components/AllAnimeSliders";
import Footer from "@/components/Footer";

function logoLink(){
    const link = "https://occ-0-38-3933.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABX6s_nIy2XK8lvhrwLdN21iPhYBPFvd4rKL7rbN98bdkZPIpB1_aa6MvwxXaozWIdulHXAxxwKpgz0HiMA-s4j8-AbfFfmiqgZ5FiM8Kr4-w.png?r=e30"

    return link
}

export default function Movies() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden animate-screenOpacity">
      <FeaturedContent logo={logoLink()} backgroundImage='https://i.imgur.com/7HxoLn5.jpg' />

      <AnimeSliders/>

      <Footer/>
    </div>
  )
}