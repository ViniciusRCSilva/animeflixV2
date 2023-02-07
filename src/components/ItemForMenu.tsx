import Router from "next/router"
import { FunctionComponent } from "react"

interface ItemProps{
    Icon: React.ElementType
    name: string
    link?: string
}

const ItemForMenu: FunctionComponent<ItemProps> = ({
        Icon,
        name,
        link
    }) => {
        return(
            <div 
                className="flex items-center mt-1 mb-1 hover:underline"
                onClick={() => Router.push(`/${link}`)}
            >
                <Icon width={24} height={24} className="ml-1 mr-3 text-[#b3b3b3]" />
                <p>{name}</p>
            </div>
        )
}

export default ItemForMenu