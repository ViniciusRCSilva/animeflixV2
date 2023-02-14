import { MagnifyingGlass } from "phosphor-react"
import Link from "./LinkTopbar"

import Router from "next/router";
import Image from "next/image";

import logo from '../../public/animeflix_logo.png'
import React, { useEffect, useState } from "react";
import MenuAccount from "./MenuAccount";
import NewsNotification from "./NewsNotification";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'

import { List } from 'phosphor-react'
import LinkMobile from "./LinkTopbarMobile";

export default function Topbar(){
    const [search, setSearch] = useState('hidden')

    const [topbarColor, setTopbarColor] = useState('background')

    const [opacity, setOpacity] = useState(50)

    function handleSearch(){
        if(search == 'hidden'){
            setSearch('flex')
        }else{
            setSearch('hidden')
        }
    }

    function handleClickTopbarColor(){
        setTopbarColor("black")
        setOpacity(0)
    }

    function handleOutTopbarColor(){
        setTopbarColor("background")
        setOpacity(50)
    }

    useEffect(() => {

    }, [])

    return(
        <div className={`z-50 fixed w-full h-16 bg-${topbarColor} bg-opacity-${opacity} lg:bg-gradient-to-t lg:from-[#141414] lg:to-black px-[4%]`}>
            <div className="flex h-full items-center justify-between">
            
                <div className="flex items-center">
                    <div className="flex lg:hidden mr-5">
                        <Menu>
                            <MenuButton onMouseEnter={handleClickTopbarColor} onMouseLeave={handleOutTopbarColor}>
                                <List className='text-white w-8 h-8' />
                            </MenuButton>
                            <MenuList 
                                className='w-64 h-screen bg-black text-[#808080] font-bold -ml-4 overflow-scroll'
                                onClick={handleClickTopbarColor}
                                onMouseLeave={handleOutTopbarColor}
                            >
                                <div className='pt-4 pb-3 pl-4'>
                                    <MenuItem className='mb-3'>
                                        <div className="flex justify-center items-center bg-green-600 w-8 h-8 mr-3" />
                                        <div className='flex flex-col justify-start'>
                                            <p>Vini</p>
                                            <p className='text-[.7em] -mt-1'>Trocar de perfil</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem className='mb-3 h-4'>Conta</MenuItem>
                                    <MenuItem className='mb-3 h-4'>Central de Ajuda</MenuItem>
                                    <MenuItem className='mb-3 h-4'>Sair do AnimeFlix</MenuItem>
                                </div>

                                <div className="flex w-full h-[1px] bg-[#b3b3b3] border-opacity-50" />

                                <div className="pt-4 pb-3 pl-4">
                                    <MenuItem className='mb-3 h-4'>
                                        <LinkMobile name="Início" link="" />
                                    </MenuItem>
                                    <MenuItem className='mb-3 h-4'>
                                        <LinkMobile name="Séries" link="series" />
                                    </MenuItem>
                                    <MenuItem className='mb-3 h-4'>
                                        <LinkMobile name="Filmes" link="movies" /> 
                                    </MenuItem>
                                    <MenuItem className='mb-3 h-4'>
                                        <LinkMobile name="Bombando" link="popular" />  
                                    </MenuItem>
                                    <MenuItem className='mb-3 h-4'>
                                        <LinkMobile name="Minha lista" link="myList" />
                                    </MenuItem>
                                    <MenuItem className='mb-3 h-4'>
                                        <LinkMobile name="Ação" link="" />
                                    </MenuItem>
                                    <MenuItem className='mb-3 h-4'>
                                        <LinkMobile name="Comédia" link="" />
                                    </MenuItem>
                                    <MenuItem className='mb-3 h-4'>
                                        <LinkMobile name="Terror" link="" />
                                    </MenuItem>
                                    <MenuItem className='mb-3 h-4'>
                                        <LinkMobile name="Música e musicais" link="" />
                                    </MenuItem>
                                    <MenuItem className='mb-3 h-4'>
                                        <LinkMobile name="Romance" link="" />
                                    </MenuItem>
                                    <MenuItem className='mb-3 h-4'>
                                        <LinkMobile name="Dramas" link="" />
                                    </MenuItem>
                                </div>
                            </MenuList>
                        </Menu>
                    </div>

                    <div 
                        className="flex items-center justify-center mr-6 cursor-pointer"
                        onClick={() => Router.push("/")}
                    >
                        <Image src={logo} width={120} height={120} alt="logo" />
                    </div>

                    <div className="hidden lg:flex">
                        <Link name="Início" link="" />
                        <Link name="Séries" link="series" />
                        <Link name="Filmes" link="movies" />
                        <Link name="Bombando" link="popular" />
                        <Link name="Minha lista" link="myList" />
                    </div>
                </div>

                <div className="flex lg:hidden w-[6em] border-[1px] border-[#b3b3b3]">
                    <input
                            type="text" 
                            placeholder="Buscar" 
                            className={'bg-background bg-opacity-80 w-[5.85em] outline-none text-white p-2 placeholder:text-sm'}
                    />
                </div>

                <div className="hidden lg:flex items-center text-white">
                    <div className="flex items-center mr-4 cursor-pointer" >
                        <MagnifyingGlass className="w-6 h-6" weight="bold" onClick={handleSearch} />

                        <input 
                            type="text" 
                            placeholder="ex.: Títulos, personagens e gêneros" 
                            className={`${search} bg-transparent p-2 placeholder:text-sm focus:outline-none`}
                        />
                    </div>


                    <div className="hidden lg:flex mr-4">
                        <NewsNotification />
                    </div>

                    <div className="hidden lg:flex">
                        <MenuAccount/>
                    </div>
                </div>

            </div>
        </div>
    )
}