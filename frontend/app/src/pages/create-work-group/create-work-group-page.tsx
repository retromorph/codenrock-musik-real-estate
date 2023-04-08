import * as React from "react";

import { TopNavbar } from "../components/top-navbar";

export function CreateWorkGroupPage(){

    const [name, setName] = React.useState('');

    const [data, setData] = React.useState<any[]>([])

    const CreateEmployee = () => {
        setData([...data, {email: ''}])
    }

    const ChangeEmployee = (text: string, index: number) => {
        const newData = [...data]
        newData[index].email = text
        setData([...newData])
    }

    const DeleteEmployee = (index: number) => {
        let newData = [...data]
        newData.splice(index, 1)
        setData([...newData])
    }

    const CreateGroup = () => {

    }

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
                <div className={'mt-[50px] w-full'}>
                    <div className={'flex flex-row h-[56px] border-2 items-center rounded-t-md'}>
                        <p className={'w-full text-center font-bold text-[18px]'}>{name}</p>
                    </div>
                    {data.map((item, index) => (
                        <div className={'h-[56px] border-2 border-t-0 flex flex-row items-center box-border pl-[10px] pr-[10px]'}>
                            <input className={'outline-none w-full'} placeholder={'Введите почту сотрудника'} value={item.email} onChange={(e) => ChangeEmployee(e.target.value, index)}/>
                            <div className={'cursor-pointer box-border p-[2px] hover:bg-gray-50 rounded-md hover:border-[1px] ml-auto mr-0'} onClick={() => DeleteEmployee(index)}>
                                <img src={'/icons/cross.png'} alt={'delete'}/>
                            </div>
                        </div>
                    ))}
                    <div className={'flex flex-row h-[56px] border-2 items-center rounded-b-md border-t-0 justify-center cursor-pointer'}>
                        <div className={'flex flex-row hover:bg-gray-50 box-border pt-[5px] pb-[5px] pl-[10px] pr-[10px] rounded-md hover:border-[1px] items-center'} onClick={CreateEmployee}>
                            <p className={'w-full text-center text-[18px]'}>Добавить сотрудника</p>
                            <img alt={'plus'} className={'ml-2'} src={"/icons/plus.png"}/>
                        </div>
                    </div>
                    <div className={'flex flex-row mt-[50px]'}>
                        <button className={'w-[150px] h-[40px] bg-blue-400 text-white rounded-md ml-auto mr-auto'} onClick={CreateGroup}>
                            Создать группу
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}