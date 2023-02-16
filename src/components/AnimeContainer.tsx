interface AnimeProps{
    image: string
    className: string
}

export default function AnimeContainer({ image, className }: AnimeProps){
    return(
        <div 
            className={`${className}`}
        >
            <div 
                style={{backgroundImage: `url(${image})`}} 
                className="w-[45vw] h-[100px] lg:w-[16vw] lg:h-[20vh] bg-cover bg-center lg:rounded-md delay-300 lg:hover:scale-125 transition-all cursor-pointer" 
            />
        </div>
    )
}