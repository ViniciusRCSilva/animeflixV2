import FeaturedContent from "@/components/FeaturedContent";
import AnimeSliders from "@/components/AllAnimeSliders";
import Footer from "@/components/Footer";

function logoLink(){
    const link = "https://occ-0-784-2773.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXo-wdx_H_u8RSf-rQ4qFc19SLHtEuXZGdioZSUfpCxR8ge_ms9JK4fplvKCMF5QQP3Q2n9XJUUw3ery04b9qc_yW6FovPsQWnOHLSf2qE4S.png?r=f91"

    return link
}

export default function Series() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <FeaturedContent logo={logoLink()} backgroundImage='https://i.pinimg.com/originals/d8/fc/f9/d8fcf96a55264b304b8046f8cfc7b472.jpg' />

      <AnimeSliders/>

      <Footer/>
    </div>
  )
}