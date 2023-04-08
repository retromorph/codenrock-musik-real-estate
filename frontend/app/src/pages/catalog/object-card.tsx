import * as React from 'react'

import { useNavigate } from "react-router-dom";

export function ObjectCard({id, name, workGroup, imageSrc}: {id: number, name: string, workGroup: string, imageSrc: string}){

    const [isHover, setIsHover] = React.useState(false);

    const navigate = useNavigate()

    return(
        <div className={`w-full aspect-[1/1.4] border-[1px] rounded-md shadow-xl border-box p-[20px] cursor-pointer
                         ${isHover ? 'transition-all delay-100 scale-[103%] ease-out' : 'transition-all delay-100 ease-out scale-100'}`}
             onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
             onClick={() => navigate(`/catalog/${id}`)}>
            <img className={'w-full h-[70%] object-cover'} src={imageSrc} alt={''}/>
            <p className={'w-full text-center mt-4 text-[18px]'}>{name}</p>
            <p className={'w-full text-center mt-4 text-[18px]'}>Рабочая группа: {workGroup}</p>
        </div>
    )

}