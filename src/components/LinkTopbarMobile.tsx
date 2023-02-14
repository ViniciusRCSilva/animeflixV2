import Router from "next/router"

interface LinkProps{
    name: string
    link?: string
}

export default function LinkMobile({ name, link }: LinkProps){
    return(
        <p 
            onClick={() => Router.push(`/${link}`) }
        >{name}</p>
    )
}