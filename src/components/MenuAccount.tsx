import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"
import ItemForMenu from "./ItemForMenu";

import { Triangle, PencilSimple, UserSwitch, User, Question } from "phosphor-react"

export default function MenuAccount(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <Menu isOpen={isOpen}>
            <MenuButton
                mx={1}
                py={[1, 2, 2]}
                px={4}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                <div className="flex items-center group cursor-pointer">
                    <div className="flex justify-center items-center bg-green-600 w-9 h-9 rounded-lg" />
                    
                    {isOpen ? <Triangle weight="fill" className="ml-2 w-3" /> : <Triangle weight="fill" className="-rotate-180 ml-2 w-3" />}
                </div>
            </MenuButton>

            <MenuList 
                onMouseEnter={onOpen} 
                onMouseLeave={onClose}
                className="bg-black bg-opacity-50 border-[1px] border-[#b3b3b3] border-opacity-50 text-sm w-56"
            >

                <div className="mb-3 p-2">
                    <MenuItem className="mt-1 mb-1 hover:underline">
                        <div className="flex justify-center items-center bg-green-600 w-8 h-8 rounded-lg mr-3" />
                        <p>Vini</p>
                    </MenuItem>

                    <MenuItem>
                        <ItemForMenu Icon={PencilSimple} name="Gerenciar perfis" />
                    </MenuItem>

                    <MenuItem>
                        <ItemForMenu Icon={UserSwitch} name="Transferir perfil" />
                    </MenuItem>

                    <MenuItem>
                        <ItemForMenu Icon={User} name="Conta" />
                    </MenuItem>

                    <MenuItem>
                        <ItemForMenu Icon={Question} name="Central de ajuda" />
                    </MenuItem>
                </div>
                
                <div className="flex w-full h-[1px] bg-[#b3b3b3] border-opacity-50" />

                <MenuItem className="flex w-full items-center justify-center mt-3 mb-3 hover:underline">
                    Sair do AnimeFlix
                </MenuItem>
            </MenuList>
        </Menu>
    )
}