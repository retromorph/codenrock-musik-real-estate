import * as React from 'react'

import { TopNavbar } from "../components/top-navbar";
import {useSelector} from "react-redux";
import Select from "react-select";
import moment from "moment";
import {Day} from "./day";
import {useRef} from "react";

const Months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
const Days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

export function CalendarPage(){

    const work_groups_info = useSelector((state: any) => state.work_groups.workGroups.map((state: any) => state.info))
    const work_groups = useSelector((state: any) => state.work_groups.workGroups)

    const [monthDelay, setMonthDelay] = React.useState(0);
    const [monthDays, setMonthDays] = React.useState<number[]>([])
    const [title, setTitle] = React.useState('')

    const [plans, setPlans] = React.useState<any[]>([])
    const [indexGroup, setIndexGroup] = React.useState(-1)

    const selector = useRef<any>()

    React.useEffect(() => {
        if (work_groups && work_groups.length > 0){
            setIndexGroup(0);
            selector.current.setValue(work_groups[0].info)
        }
    }, [work_groups])

    React.useEffect(() => {
        let month = moment().add("months", monthDelay).month() + 1;
        let year  = moment().add("months", monthDelay).year();
        let array = Array.from(Array(moment(`${year}-${month}`).daysInMonth()), (_, i) => i + 1)
        let dayFirst = moment(`${year}-${month}-01`).weekday()
        const additionBegin = [6, 0, 1, 2, 3, 4, 5];
        let newArr = [];
        for(let i = 0; i < additionBegin[dayFirst]; i++){
            newArr.push(-1);
        }
        array = newArr.concat(array);
        let dayLast = moment(`${year}-${month}-${array[array.length - 1]}`).weekday()
        newArr = [];
        const additionEnd = [0, 6, 5, 4, 3, 2, 1]
        for(let i = 0; i < additionEnd[dayLast]; i++){
            newArr.push(-1);
        }
        array = array.concat(newArr);
        setMonthDays(array);
        setTitle(`${Months[month-1]}, ${year}`)

        if(indexGroup != -1){
            const newPlans = [...work_groups[indexGroup].plans].filter((plan: any) => {
                const date = plan.date.split('-')
                if (date[0] == year && date[1] == month){
                    return true;
                }
                return false;
            })
            setPlans([...newPlans])
        }
    }, [monthDelay])

    const formatGroupLabel = (data: any) => (
        <div>
            <p>{data.name}</p>
        </div>
    );

    const OnChangeGroup = (e: any) => {
        const id = e!.value;
        const index = work_groups.findIndex((group: any) => group.info.value  == id)
        let month = moment().add("months", monthDelay).month() + 1;
        let year  = moment().add("months", monthDelay).year();
        const newPlans = [...work_groups[index].plans].filter((plan: any) => {
            const date = plan.date.split('-')
            if (date[0] == year && date[1] == month){
                return true;
            }
            return false;
        })
        setIndexGroup(index)
        setPlans([...newPlans])
    }


    return(
        <>
            <TopNavbar/>
            <div className={'w-full box-border pt-[150px] pb-[150px] pl-[10%] pr-[10%] flex flex-col'}>
                <p className={'text-[24px] font-bold'}>Календарь рабочей группы</p>
                <div className={'flex flex-row h-[50px] border-b-[1px] mt-[30px] items-center'}>
                    <div className={'flex flex-row items-center'}>
                        <p className={'text-[18px] font-bold w-[150px]'}>{title}</p>
                        <button className={'w-[120px] h-[40px] bg-blue-400 text-white rounded-md ml-4'} onClick={() => setMonthDelay(value => value - 1)}>
                            Предыдущий
                        </button>
                        <button className={'w-[120px] h-[40px] bg-blue-400 text-white rounded-md ml-4'} onClick={() => setMonthDelay(value => value + 1)}>
                            Cледующий
                        </button>
                    </div>
                    <div className={'ml-auto flex flex-row items-center'}>
                        <p className={'mr-2'}>Рабочая группа:</p>
                        <Select options={work_groups_info} formatOptionLabel={formatGroupLabel} onChange={OnChangeGroup} ref={selector}/>
                    </div>
                </div>
                <div className={'flex flex-row w-full h-[50px] border-[1px] rounded-t-[20px] mt-4 justify-between items-center'}>
                    {Days.map((day: string) => (
                        <p className={'w-full text-center'}>
                            {day}
                        </p>
                    ))}
                </div>
                <div className={'grid grid-cols-7 w-full'}>
                    {monthDays.map((day: number, index) => (
                        <Day day={day} key={index} plans={plans}></Day>
                    ))}
                </div>
            </div>
        </>
    )
}