import Image, { StaticImageData } from "next/image";
import { Info, Play } from "phosphor-react";

interface ContentProps{
    description?: string
    logo: string
    backgroundImage: string
}

export default function FeaturedContent({ description, logo, backgroundImage }: ContentProps){
    return(
        <div 
            style={{backgroundImage: `url(${backgroundImage})`}} 
            className={`hidden lg:flex flex-col items-start p-[15%] shadow-image border-2 border-[#141414] w-full h-full rounded-b-3xl bg-cover bg-center`
        }>
            <div className="flex flex-col -ml-[15%] w-[36vw]">
                <div>
                    <div className="mb-[1.2vw]">
                        <div style={{backgroundImage: `url(${logo})`}} className="bg-center bg-cover w-[550px] h-[224px]" />
                    </div>

                    <div className="font-[500] text-[1.2rem] text-white mb-[0.5vw]">
                        {description}
                    </div>

                    <div className="flex items-center mt-[1.5vw] text-[1.6rem] font-semibold text-white">
                        <div className="flex items-center justify-center mr-3 py-2 px-6 bg-white text-black rounded-md gap-3 hover:opacity-80 cursor-pointer">   
                            <Play weight="fill" />
                            Assistir
                        </div>

                        <div className="flex items-center justify-center py-2 px-6 bg-[#b3b3b3] bg-opacity-50 rounded-md gap-3 hover:opacity-80 cursor-pointer">
                            <Info/>
                            Mais informações
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}