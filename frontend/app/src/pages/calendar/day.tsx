import * as React from 'react'

export function Day({day, plans}: {day: number, plans: any[]}){

    const [index, setIndex] = React.useState(-1)

    React.useEffect(() => {
        const index = plans.findIndex((item: any) => {
            const date = item.date.split('-');
            if(date[2] == day){
                return true;
            }
            return false;
        })
        setIndex(index)
    }, [plans])

    if(day == -1){
        return(
            <div className={'w-full aspect-[1/1] border-[1px] flex flex-col box-border p-[5px] bg-gray-100'}>

            </div>
        )
    }

    return(
        <div className={'w-full aspect-[1/1] border-[1px] flex flex-col box-border p-[5px]'}>
            {index != -1 && (
                <div className={'w-full h-[60%] flex flex-col items-center justify-center cursor-pointer'} >
                    <p className={'text-center text-[14px]'}>Встреча рабочей группы</p>
                    {/*<p className={'text-center text-[14px]'}>Время: {plans[index].time}</p>*/}
                    {/*<p className={'text-center text-[14px]'}>Cсылка: {plans[index].url}</p>*/}
                </div>
            )}
            <p className={'mt-auto w-full text-end text-[18px]'}>{day}</p>
        </div>
    )
}