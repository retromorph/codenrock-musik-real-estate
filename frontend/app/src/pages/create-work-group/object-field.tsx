import * as React from 'react'

export function ObjectField({data, setData, isEditData, item, index}: {data: any, setData: any, isEditData: boolean, item: any, index:number}){

    const ChangeValue = (value: string, index: number) => {
        const newData = {...data}
        newData.data[index].value = value
        setData({...newData})
    }

    const ChangeFiled = (value: string, index: number) => {
        const newData = {...data}
        newData.data[index].field = value
        setData({...newData})
    }

    const DeleteField = (index: number) => {
        const newData = {...data}
        newData.data.splice(index, 1)
        setData({...newData})
    }

    return(
        <div className={'flex flex-row mt-2 items-center w-full'}>
            {item.changeField && isEditData && (
                <div className={'w-[24px] h-[24px] cursor-pointer box-border p-[2px] mr-2 bg-gray-50 rounded-md border-[1px]'} onClick={() => DeleteField(index)}>
                    <img src={'/icons/cross.png'} alt={'delete'}/>
                </div>
            )}
            <input className={'outline-none w-[35%]'} value={item.field} readOnly={item.changeField ? !isEditData : true} onChange={(e) => ChangeFiled(e.target.value, index)}></input>
            <div className={'ml-auto mr-0 w-[55%] border-[1px] h-[40px] flex flex-row items-center box-border pl-[10px] pr-[10px]'}>
                <input className={'outline-none w-full'} readOnly={!isEditData} value={item.value} onChange={(e) => ChangeValue(e.target.value, index) }/>
            </div>
        </div>
    )

}