import Router from "next/router"

interface LinkProps{
    name: string
    link?: string
}

export default function Link({ name, link }: LinkProps){
    return(
        <p 
            className="hover:opacity-70 ml-5 text-sm text-gray-unselected transition-opacity cursor-pointer"
            onClick={() => Router.push(`/${link}`) }
        >{name}</p>
    )
}