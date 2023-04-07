import * as React from 'react'

import { TopNavbar } from "../components/top-navbar";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";

export function UserProfilePage(){

    const user = useSelector((state: any) => state.user)
    const work_groups = useSelector((state: any) => state.work_groups.workGroups)

    const navigate = useNavigate()

    const InformationDiv = ({value, label}: { value: any, label: string } ) => {
        return(
            <div className={'mt-2 w-[60%]'}>
                <label className={'text-[18px]'}>{label}</label>
                <div className={'border-2 mt-1 h-[40px] flex flex-row items-center box-border p-[5px] rounded-md'}>
                    <p className={'text-[18px] outline-none w-full'}>{value}</p>
                </div>
            </div>
        )
    }

    const Exit = () => {
        navigate('/auth')
    }

    return(
        <>
            <TopNavbar/>
            <div className={'w-full box-border pt-[150px] pb-[150px] pl-[10%] pr-[10%] flex flex-row'}>
                <img alt={'avatar'} className={'max-w-[400px] max-h-[532px] object-cover'} src={'https://amiel.club/uploads/posts/2022-03/1647762844_3-amiel-club-p-kartinki-litsa-cheloveka-3.png'}/>
                <div className={'flex flex-col w-full ml-[100px]'}>
                    <div>
                        <p className={'text-[24px] text-center font-bold'}>Личная информация</p>
                        <div className={'mt-[30px]'}>
                            <InformationDiv label={'Имя'} value={user.first_name}/>
                            <InformationDiv label={'Отчество'} value={user.second_name}/>
                            <InformationDiv label={'Фамилия'} value={user.last_name}/>
                            <InformationDiv label={'Email'} value={user.email}/>
                            <InformationDiv label={'Номер телефона'} value={user.phone}/>
                            <InformationDiv label={'Роль'} value={user.role}/>
                        </div>
                    </div>
                    <div className={'mt-[50px] w-full'}>
                        <p className={'text-[24px] text-center font-bold'}>Рабочие группы</p>
                        <button className={'w-[100px] h-[40px] bg-blue-400 text-white rounded-md ml-auto mr-auto mt-4'} onClick={() => navigate('/createWorkGroup')}>
                            Создать
                        </button>
                        <div className={'mt-[30px]'}>
                            {work_groups.map((group: any) => (
                                <div key={group.id} className={'w-[60%] border-2 h-[40px] [&:not(:first-child)]:border-t-0 last:rounded-b-md first:rounded-t-md flex flex-row items-center'}>
                                    <p className={'ml-4'}>{group.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={'mt-[50px] w-full flex flex-row'}>
                        <button className={'w-[100px] h-[40px] bg-blue-400 text-white rounded-md ml-auto mr-auto'} onClick={Exit}>
                            Выйти
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}