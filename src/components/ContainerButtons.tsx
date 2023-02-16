import { CaretDown, Circle, Play, Plus, ThumbsUp } from "phosphor-react";

interface ContainerButtonsProps{
    visible: string
}

export default function ContainerButtons({ visible }: ContainerButtonsProps){
    return(
        <div className={`${visible} w-full flex-col p-[1em] bg-background text-white text-[0.8vw] shadow-xl group-hover:animate-containerOpacity`}>
            <div className="flex justify-between mb-[.5em]">
                <div className="flex">
                    <div className="bg-white text-black rounded-full m-1 p-2 border-2 hover:opacity-80">
                        <Play weight="fill" />
                    </div>

                    <div className="bg-transparent rounded-full m-1 p-2 border-2 border-[#646464] hover:border-white">
                        <Plus />
                    </div>

                    <div className="bg-transparent rounded-full m-1 p-2 border-2 border-[#646464] hover:border-white">
                        <ThumbsUp />
                    </div>
                </div>

                <div className="bg-transparent rounded-full m-1 p-2 border-2 border-[#646464] hover:border-white">
                    <CaretDown />
                </div>
            </div>

            <div className="flex items-center my-[.8em]">
                <div className="my-[.25em] mr-[.5em]">
                    <p className="text-green-600 font-semibold">100% relevante</p>
                </div>

                <div className="flex mr-[.5em] bg-red-600 w-8 h-8 rounded-sm items-center justify-center">
                    <p className="font-semibold">A16</p>
                </div>

                <div className="mr-[.5em]">
                    <p>1 temporada</p>
                </div>
            </div>

            <div className="flex mb-[.5em]">
                <div className="pr-[.5vw]">
                    <p>Referência</p>
                </div> 

                <div className="flex items-center pr-[.5vw]">
                    <Circle weight="fill" className="text-[#646464] pr-[.5vw]" />
                    <p>Referência</p>
                </div> 

                <div className="flex items-center pr-[.5vw]">
                    <Circle weight="fill" className="text-[#646464] pr-[.5vw]" />
                    <p>Referência</p>
                </div> 
            </div>
        </div>
    )
}