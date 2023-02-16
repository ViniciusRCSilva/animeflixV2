import Slider from "./Slider"
/* import { useEffect, useState } from "react"; */
import AnimeContainer from "./AnimeContainer";

const AnimeImages = [
    {image: "https://wallpapercave.com/wp/NAA7Ap3.jpg"},
    {image: "https://i.pinimg.com/originals/52/89/a0/5289a0ddf808b686b877e404810903fe.jpg"},
    {image: "https://wallpapercave.com/wp/wp3084736.jpg"},
    {image: "https://beanstalk-9fcd.kxcdn.com/wp-content/uploads/2022/10/Cyberpunk-Edgerunners-Wallpaper-1.jpg"},
    {image: "https://occ-0-3934-586.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUbolrsi2liOMO4EWmHoWAIuzTpefasoKDVN0GSY4WxOoo9OCTGCd_y2ysAfKdaxmLaafS7Upvd0Y4Nw8Hd6I31jS51xbB06Jkxz6OR20J6FRkmja9sIj1WuCE5aLzF5rd0Lyw.jpg?r=be3"},
    {image: "https://coolthemestores.com/wp-content/uploads/2023/01/vinland-saga-wallpaper-background.jpg"},
]

/* 
type Image = {
    image: string
}[]
 */

interface AnimeSliders{
    title: string
}

export default function RandomizeAllAnimeSliders({ title }: AnimeSliders){
/* 
    const [randomArray, setRandomArray] = useState<Image>([]);
    
    useEffect(() => {
      const randomizeArray = [...AnimeImages].sort(() => 0.5 - Math.random());
      setRandomArray(randomizeArray.slice(0, 6));
    }, []);

 */    
    return(
        <Slider title={title}>
          {AnimeImages.map((Anime, i) => {
            return(
              <AnimeContainer key={i} className={`keen-slider__slide number-slide${i+1}`} image={Anime.image} />
            )
          })}
        </Slider>
    )
}