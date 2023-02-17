import { useState } from "react"
import ContainerButtons from "./ContainerButtons"

interface AnimeProps{
    image: string
    className: string
}


export default function AnimeContainer({ image, className }: AnimeProps){
    const [visible, setVisible] = useState('hidden')

    function handleVisibilityFlex(){
        if(visible == 'hidden'){
            setVisible('flex')
        }else{
            setVisible('hidden')
        }
    }

    function handleVisibilityHidden(){
        if(visible == 'flex'){
            setVisible('hidden')
        }else{
            setVisible('flex')
        }
    }

    return(
        <div 
            className={`${className}`}
        >
            <div 
                className="flex flex-col lg:rounded-md delay-300 lg:hover:scale-125 transition-all cursor-pointer lg:translate-y-1 lg:hover:-translate-y-28 group"
                onMouseEnter={handleVisibilityFlex}
                onMouseLeave={handleVisibilityHidden}
            >
                <div 
                    style={{backgroundImage: `url(${image})`}} 
                    className="w-[45vw] h-[100px] lg:w-[16vw] lg:h-[20vh] bg-cover bg-center z-0 pt-36" 
                >
                    <ContainerButtons visible={`hidden lg:${visible}`} />
                </div>

            </div>

        </div>
    )
}