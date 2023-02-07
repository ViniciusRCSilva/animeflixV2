interface NotificationProps{
    title: string
    body: string
    age: string
}

export default function NotificationComp({ title, body, age }: NotificationProps){
    return(
        <div className="flex flex-col">
            <div className="flex items-center w-[408px]">
                <div className="w-36 h-24 p-4">
                    <div className="w-28 h-16 bg-[#b3b3b3]" />
                </div>

                <div className="flex flex-col max-w-[264px] text-base text-[#ccc]">
                    <p>{title}</p>
                    <p>{body}</p>
                    <p className="text-xs text-[#808080]">há {age}</p>
                </div>

            </div>

            <div className="flex w-full h-[1px] bg-[#b3b3b3] border-opacity-50" />
        </div>
    )
}