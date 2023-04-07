import * as React from 'react'

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function TopNavbar(){

    const user = useSelector((state: any) => state.user)

    const navigate = useNavigate()

    return(
        <div className={'fixed w-full h-[50px] bg-blue-400 flex flex-row items-center box-border pl-[30px] pr-[30px]'}>
            <p className={'text-white font-bold text-[18px]'}>Объекты недвижимости</p>
            <div className={'ml-auto flex flex-row gap-[30px]'}>
                <button className={'text-white border-2 w-[100px] h-[32px] rounded-md'} onClick={() => navigate('/catalog')}>
                    Реестр
                </button>
                <button className={'text-white border-2 w-[100px] h-[32px] rounded-md'} onClick={() => navigate('/calendar')}>
                    Календарь
                </button>
            </div>
            <div className={'ml-auto mr-0 flex flex-row items-center cursor-pointer'} onClick={() => navigate('/profile')}>
                <p className={'text-white font-bold text-[14px] mr-3'}>{user.first_name} {user.last_name}</p>
                <img className={'w-[32px] h-[32px] rounded-full object-cover'} alt={'avatar'} src={user.image_src}/>
            </div>
        </div>
    )
}