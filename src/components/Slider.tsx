import { useKeenSlider } from "keen-slider/react"

interface SliderProps{
    title: string
    children: any
}

export default function Slider({ title, children }: SliderProps){
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        slides: {
          perView: 5,
          spacing: 0,
        },
    })

    const [refMobile] = useKeenSlider<HTMLDivElement>({
        loop: false,
        mode: "snap",
        slides: {
          perView: 2,
          spacing: 0,
        },
    })

    return(
        <>
            <div className="hidden lg:flex flex-col justify-center px-[4%] pb-[80px]">
                <p className="text-[1.4vw] font-bold text-[#999]">{title}</p> 
                <div ref={ref} className="flex w-full keen-slider">
                    {children}
                </div>
            </div>

            <div className="flex lg:hidden flex-col justify-center px-[4%] pb-[80px]">
                <p className="text-[1.2em] mb-[.5em] font-bold text-[#999]">{title}</p> 
                <div ref={refMobile} className="flex w-full keen-slider">
                    {children}
                </div>
            </div>
        </>
    )
}