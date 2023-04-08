import * as React from 'react'

export function DocumentField({document}: {document: any}){

    return(
        <div className={'h-[50px] w-full rounded-md shadow-md border-box p-[10px] mb-[40px] border-[1px] flex flex-row items-center'}>
            <p className={'text-[18px]'}>{document.name}</p>
            <a download={true} className={'ml-auto'} href={document.url}>Скачать</a>
        </div>
    )

}