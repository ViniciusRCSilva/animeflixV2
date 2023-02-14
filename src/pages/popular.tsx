import FeaturedContent from "@/components/FeaturedContent";
import AnimeSliders from "@/components/AllAnimeSliders";
import Footer from "@/components/Footer";

function logoLink(){
    const link = "https://cdn.shopify.com/s/files/1/0556/4009/6958/collections/Chainsaw_Man_logo.png?v=1671202992"

    return link
}

export default function Popular() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden animate-screenOpacity">
      <FeaturedContent logo={logoLink()} backgroundImage='https://i.blogs.es/0ecab2/chainsaw-man/1366_2000.jpeg' />

      <AnimeSliders/>

      <Footer/>
    </div>
  )
}