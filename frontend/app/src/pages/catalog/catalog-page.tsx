import * as React from 'react'

import { TopNavbar } from "../components/top-navbar";
import { ObjectCard } from "./object-card";
import { useNavigate } from "react-router-dom";

export function CatalogPage(){

    const [search, setSearch] = React.useState('')

    const [objects, setObjects] = React.useState<any[]>([
        {id: 1, name: 'Объект 1', workGroup: 'Первая группа', imageSrc: 'https://cdn-s-static.arzamas.academy/x/119-bass-QqFwvKssCCYDK2ZmNx4zWzic/dom/img/dom-2.jpg'},
        {id: 2, name: 'Объект 2', workGroup: 'Первая группа', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Moscow_Red_Gate_Building_asv2019-06.jpg/1200px-Moscow_Red_Gate_Building_asv2019-06.jpg'},
        {id: 3, name: 'Объект 3', workGroup: 'Вторая группа', imageSrc: 'https://stroi.mos.ru/uploads/media/main_image/0002/03/1ade8166cd6927f9205db21d16b407f518de557c.png'},
        {id: 4, name: 'Объект 4', workGroup: 'Третья группа', imageSrc: 'https://dpru.obs.ru-moscow-1.hc.sbercloud.ru/images/article/2021/02/03/CFCB7063-2D51-4B19-916F-ED99209255B6.jpg'},
        {id: 5, name: 'Объект 5', workGroup: 'Четвертая группа', imageSrc: 'https://novate.ru/files/u36693/poorhouse-02.jpg'}
    ])

    const navigate = useNavigate()

    return(
        <>
            <TopNavbar/>
            <div className={'w-full box-border pt-[150px] pb-[150px] pl-[10%] pr-[10%] flex flex-col'}>
                <p className={'text-[24px] font-bold'}>Реестр объектов недвижемости</p>
                <div className={'w-full flex flex-col mt-[30px]'}>
                    <div className={'w-full h-[50px] border-b-2 flex flex-row justify-end items-center'}>
                        <button className={'w-[100px] h-[40px] bg-blue-400 text-white rounded-md mr-auto'} onClick={() => navigate('/create')}>
                            Создать
                        </button>
                        <button className={'w-[100px] h-[40px] bg-blue-400 text-white rounded-md mr-4'}>
                            Фильтр
                        </button>
                        <div className={'flex flex-row border-2 h-[40px] box-border p-[5px] rounded-md items-center'}>
                            <input placeholder={'Поиск'} className={'outline-none ml-1'} value={search} onChange={(e) => setSearch(e.target.value)}/>
                            <div className={'w-[32px] h-[32px] cursor-pointer box-border p-[2px] ml-2 hover:bg-gray-50 rounded-md hover:border-[1px] ml-auto mr-0'}>
                                <img src={'/icons/search.png'} alt={'search'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full mt-[30px]'}>
                        <div className={'grid grid-cols-4 gap-[40px]'}>
                            {objects.map((object: any) => (
                                <ObjectCard {...object} key={object.id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}