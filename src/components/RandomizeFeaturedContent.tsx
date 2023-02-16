import { useEffect, useState } from "react"
import FeaturedContent from "./FeaturedContent"

const AnimeImages = [
    {
        logoImage: "https://i.pinimg.com/originals/60/a9/61/60a96199afa8469b7c3c46810ed86816.png",
        backgroundImage: "https://i.pinimg.com/originals/d8/fc/f9/d8fcf96a55264b304b8046f8cfc7b472.jpg",
    },
    {
        logoImage: "https://occ-0-784-2773.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXo-wdx_H_u8RSf-rQ4qFc19SLHtEuXZGdioZSUfpCxR8ge_ms9JK4fplvKCMF5QQP3Q2n9XJUUw3ery04b9qc_yW6FovPsQWnOHLSf2qE4S.png?r=f91",
        backgroundImage: "https://wallpaper.dog/large/20498650.jpg",
    },
    {
        logoImage: "https://occ-0-38-3933.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABX6s_nIy2XK8lvhrwLdN21iPhYBPFvd4rKL7rbN98bdkZPIpB1_aa6MvwxXaozWIdulHXAxxwKpgz0HiMA-s4j8-AbfFfmiqgZ5FiM8Kr4-w.png?r=e30",
        backgroundImage: "https://i.imgur.com/7HxoLn5.jpg",
    },
    {
        logoImage: "https://cdn.shopify.com/s/files/1/0556/4009/6958/collections/Chainsaw_Man_logo.png?v=1671202992",
        backgroundImage: "https://i.blogs.es/0ecab2/chainsaw-man/1366_2000.jpeg",
    },
]

type Image = {
    logoImage: string
    backgroundImage: string
}[]

export default function RandomizeFeaturedContent(){
    const [randomArray, setRandomArray] = useState<Image>([]);
      
    useEffect(() => {
      const randomizeArray = [...AnimeImages].sort(() => 0.5 - Math.random());
      setRandomArray(randomizeArray.slice(0, 1));
    }, []);

    return(
        <div>
            {randomArray.map((Image, i) => {
                return(
                    <FeaturedContent key={i} logo={Image.logoImage} backgroundImage={Image.backgroundImage} />
                )
            })}
        </div>
    )
}