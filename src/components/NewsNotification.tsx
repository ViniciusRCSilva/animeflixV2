import { Bell } from "phosphor-react"
import { Badge } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"
import NotificationComp from "./NotificationComp";
import { useState } from "react";

const theme = createTheme({
    palette: {
      secondary: {
        main: '#E50914',
      },
    },
});

export default function NewsNotification(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    var quantity = 3

    const [notification, setNotification] = useState(quantity)

    function handleReadNotifications(){
        if(isOpen == true){
            setNotification(0)
        }
    }

    return(
        <Menu isOpen={isOpen}>
            <MenuButton
                mx={1}
                py={[1, 2, 2]}
                px={4}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseOut={handleReadNotifications}
                onMouseLeave={onClose}
            >
                <ThemeProvider theme={theme}>
                    <Badge badgeContent={notification} color="secondary">
                        <Bell className="w-6 h-6" weight="bold"/>
                    </Badge>
                </ThemeProvider>
            </MenuButton>

            <MenuList 
                onMouseEnter={onOpen} 
                onMouseLeave={onClose}
                className="bg-black bg-opacity-90 border-[1px] border-[#b3b3b3] border-opacity-50 text-sm"
            >

                <div className="">
                    <MenuItem>
                        <NotificationComp title="Assista agora" body="Temporada 3" age="1 dia" />
                    </MenuItem>

                    <MenuItem>
                        <NotificationComp title="Novidade" body="Berserk" age="2 semanas" />
                    </MenuItem>

                    <MenuItem>
                        <NotificationComp title="Continue assistindo" body="Baki Hamna" age="1 mês" />
                    </MenuItem>
                </div>
            </MenuList>
        </Menu>
    )
}