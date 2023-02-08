import { useKeenSlider } from "keen-slider/react"

interface SliderProps{
    title: string
    children: any
}

export default function Slider({ title, children }: SliderProps){
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free-snap",
        slides: {
          perView: 5,
          spacing: 0,
        },
      })

    return(
        <div className="flex flex-col justify-center px-[4%] pb-[80px]">
            <p className="text-[1.4vw] font-bold text-[#999]">{title}</p> 
            <div ref={ref} className="flex w-full keen-slider">
                {children}
            </div>
        </div>
    )
}