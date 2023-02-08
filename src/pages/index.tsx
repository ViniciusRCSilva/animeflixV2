import AnimeContainer from "@/components/AnimeContainer";
import FeaturedContent from "@/components/FeaturedContent";

import TitleLogo from '../../public/logo-dragon-ball-z.png'

import { useKeenSlider } from "keen-slider/react"
import Slider from "@/components/Slider";

export default function Home() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 5,
      spacing: 0,
    },
  })

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <FeaturedContent logo={TitleLogo} backgroundImage='https://i.pinimg.com/originals/d8/fc/f9/d8fcf96a55264b304b8046f8cfc7b472.jpg' />

      <Slider title="Em alta">
        <AnimeContainer className="keen-slider__slide" image="https://wallpapercave.com/wp/NAA7Ap3.jpg" />
        <AnimeContainer className="keen-slider__slide" image="https://i.pinimg.com/originals/52/89/a0/5289a0ddf808b686b877e404810903fe.jpg" />
        <AnimeContainer className="keen-slider__slide" image="https://wallpapercave.com/wp/wp3084736.jpg" />
        <AnimeContainer className="keen-slider__slide" image="https://beanstalk-9fcd.kxcdn.com/wp-content/uploads/2022/10/Cyberpunk-Edgerunners-Wallpaper-1.jpg" />
        <AnimeContainer className="keen-slider__slide" image="https://occ-0-3934-586.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUbolrsi2liOMO4EWmHoWAIuzTpefasoKDVN0GSY4WxOoo9OCTGCd_y2ysAfKdaxmLaafS7Upvd0Y4Nw8Hd6I31jS51xbB06Jkxz6OR20J6FRkmja9sIj1WuCE5aLzF5rd0Lyw.jpg?r=be3" />
        <AnimeContainer className="keen-slider__slide" image="https://coolthemestores.com/wp-content/uploads/2023/01/vinland-saga-wallpaper-background.jpg" />
      </Slider>

      <Slider title="Recomendados para você">
        <AnimeContainer className="keen-slider__slide" image="https://occ-0-3934-586.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUbolrsi2liOMO4EWmHoWAIuzTpefasoKDVN0GSY4WxOoo9OCTGCd_y2ysAfKdaxmLaafS7Upvd0Y4Nw8Hd6I31jS51xbB06Jkxz6OR20J6FRkmja9sIj1WuCE5aLzF5rd0Lyw.jpg?r=be3" />
        <AnimeContainer className="keen-slider__slide" image="https://i.pinimg.com/originals/52/89/a0/5289a0ddf808b686b877e404810903fe.jpg" />
        <AnimeContainer className="keen-slider__slide" image="https://wallpapercave.com/wp/wp3084736.jpg" />
        <AnimeContainer className="keen-slider__slide" image="https://coolthemestores.com/wp-content/uploads/2023/01/vinland-saga-wallpaper-background.jpg" />
        <AnimeContainer className="keen-slider__slide" image="https://beanstalk-9fcd.kxcdn.com/wp-content/uploads/2022/10/Cyberpunk-Edgerunners-Wallpaper-1.jpg" />
        <AnimeContainer className="keen-slider__slide" image="https://wallpapercave.com/wp/NAA7Ap3.jpg" />
      </Slider>
    </div>
  )
}
