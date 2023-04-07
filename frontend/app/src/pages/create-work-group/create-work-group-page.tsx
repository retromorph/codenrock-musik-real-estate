import * as React from "react";

import { TopNavbar } from "../components/top-navbar";

export function CreateWorkGroupPage(){

    const [name, setName] = React.useState('');

    return(
        <>
            <TopNavbar/>
            <div className={'w-full box-border pt-[150px] pb-[150px] pl-[30%] pr-[30%] flex flex-col'}>
                <p className={'text-[24px] font-bold'}>Создать рабочую группу</p>
                <div className={'mt-4 flex flex-col'}>
                    <label className={'mb-2 text-[18px]'}>Название</label>
                    <div className={'h-[40px] border-2 rounded-md items-center flex flex-row box-border pl-[5px] pr-[5px]'}>
                        <input placeholder={'Введите название рабочей группы'} className={'outline-none w-full'} value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
            </div>
        </>
    )
}