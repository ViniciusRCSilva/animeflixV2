interface AnimeProps{
    image: string
    className: string
}

export default function AnimeContainer({ image, className }: AnimeProps){
    return(
        <div className={`${className}`}>
            <div style={{backgroundImage: `url(${image})`}} className="w-[16vw] h-[20vh] bg-cover bg-center rounded-md delay-300 hover:scale-125 transition-all cursor-pointer" />
        </div>
    )
}