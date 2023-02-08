import { useKeenSlider } from "keen-slider/react"
import { useEffect, useState } from "react"

interface SliderProps{
    title: string
    children: any
}

export default function Slider({ title, children }: SliderProps){
    const [perViewQuantity, setPerViewQuantity] = useState(5)

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        slides: {
          perView: perViewQuantity,
          spacing: 0,
        },
    })

    function handlePerViewSlider(){
        if(window.innerWidth < 1024){
            setPerViewQuantity(1)
        }else{
            setPerViewQuantity(5)
        }
    }

    useEffect(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      window.addEventListener("resize", handlePerViewSlider);
    }, [])

    return(
        <div className="flex flex-col justify-center px-[4%] pb-[80px]">
            <p className="text-[1.2em] lg:text-[1.4vw] font-bold text-[#999]">{title}</p> 
            <div ref={ref} className="flex w-full keen-slider">
                {children}
            </div>
        </div>
    )
}