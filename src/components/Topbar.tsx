import { MagnifyingGlass } from "phosphor-react"
import Link from "./LinkTopbar"

import Router from "next/router";
import Image from "next/image";

import logo from '../../public/animeflix_logo.png'
import React, { useState } from "react";
import MenuAccount from "./MenuAccount";
import NewsNotification from "./NewsNotification";

export default function Topbar(){
    const [search, setSearch] = useState('hidden')

    function handleSearch(){
        if(search == 'hidden'){
            setSearch('flex')
        }else{
            setSearch('hidden')
        }
    }

    return(
        <div className="fixed w-full h-16 bg-gradient-to-t from-[#141414] to-black pl-[4%] pr-[4%]">
            <div className="flex h-full items-center justify-between">
            
                <div className="flex items-center">
                    <div 
                        className="flex items-center justify-center mr-6 cursor-pointer"
                        onClick={() => Router.push("/")}
                    >
                        <Image src={logo} width={120} height={120} alt="logo" />
                    </div>

                    <div className="flex">
                        <Link name="Início" link="" />
                        <Link name="Séries" link="" />
                        <Link name="Filmes" link="" />
                        <Link name="Bombando" link="" />
                        <Link name="Minha lista" link="" />
                    </div>
                </div>

                <div className="flex items-center text-white">
                    <div className="flex items-center mr-4 cursor-pointer" >
                        <MagnifyingGlass className="w-6 h-6" weight="bold" onClick={handleSearch} />

                        <input 
                            type="text" 
                            id="searchInput" 
                            placeholder="ex.: Títulos, personagens e gêneros" 
                            className={`${search} bg-transparent p-2 placeholder:text-sm focus:outline-none`}
                        />
                    </div>

                    <div className="mr-4">
                        <NewsNotification />
                    </div>

                    <MenuAccount/>
                </div>

            </div>
        </div>
    )
}