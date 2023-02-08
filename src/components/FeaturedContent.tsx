import Image from "next/image";
import { Info, Play } from "phosphor-react";

import TitleLogo from '../../public/logo-dragon-ball-z.png'

export default function FeaturedContent(){
    return(
        <div className={`hidden md:flex items-center shadow-image border-2 border-[#141414] w-full h-[800px] rounded-b-3xl bg-featuredContent bg-auto bg-center`}>
            <div className="flex flex-col w-[36%] ml-[60px]">
                <div>
                    <div className="mb-[1.2vw]">
                        <Image src={TitleLogo} alt="Logo Título" width={550} height={224} />
                    </div>

                    <div className="font-[500] text-[1.2rem] text-white mb-[0.5vw]">
                        Cinco anos após vencer o Torneio Mundial de Artes Marciais, Goku tem uma vida pacífica com sua esposa e filho. No entanto, isso muda com a chegada de um misterioso inimigo....
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