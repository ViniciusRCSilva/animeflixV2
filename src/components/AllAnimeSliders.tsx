import AnimeContainer from "./AnimeContainer";
import Slider from "./Slider";

export default function AnimeSliders(){
    return(
        <div className="mt-16 lg:mt-0">
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
          <AnimeContainer className="keen-slider__slide" image="https://wallpapercave.com/wp/wp3084736.jpg" />
          <AnimeContainer className="keen-slider__slide" image="https://coolthemestores.com/wp-content/uploads/2023/01/vinland-saga-wallpaper-background.jpg" />
          <AnimeContainer className="keen-slider__slide" image="https://i.pinimg.com/originals/52/89/a0/5289a0ddf808b686b877e404810903fe.jpg" />
          <AnimeContainer className="keen-slider__slide" image="https://beanstalk-9fcd.kxcdn.com/wp-content/uploads/2022/10/Cyberpunk-Edgerunners-Wallpaper-1.jpg" />
          <AnimeContainer className="keen-slider__slide" image="https://wallpapercave.com/wp/NAA7Ap3.jpg" />
        </Slider>
      </div>
    )
}