import * as React from 'react'

export function ObjectImage({image_src}: {image_src: string}){

    return(
        <div className={'w-full aspect-auto border-[1px] rounded-md shadow-xl border-box p-[10px]'}>
            <img className={'object-cover'} src={image_src} alt={'photo'}/>
        </div>
    )

}