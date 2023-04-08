import * as React from "react";

import { TopNavbar } from "../components/top-navbar";
import { ObjectField } from "../object-page/object-field";
import { ObjectImage } from "../object-page/object-image";
import { DocumentField } from "../object-page/document-field";
import {ChangeEvent} from "react";


export function CreateObjectPage(){

    const [images, setImages] = React.useState<File[]>([]);
    const [documents, setDocuments] = React.useState<File[]>([]);

    const [data, setData] = React.useState({
        data: [
            {field: 'Название', value: '', changeField: false},
            {field: 'Округ', value: '', changeField: false},
            {field: 'Район', value: '', changeField: false},
            {field: 'Адрес', value: '', changeField: false},
            {field: 'Тип объекта', value: '', changeField: false},
            {field: 'Cостояние объекта', value: '', changeField: false},
            {field: 'Площадь объекта', value: '', changeField: false},
            {field: 'Собственник', value: '', changeField: false},
            {field: 'Фактический пользователь', value: '', changeField: false}
        ],
        images: [

        ],
        documents: [

        ]
    })

    const CreateField = () => {
        const newData = {...data}
        newData.data.push({field: '', value: '', changeField: true})
        setData({...newData})
    }

    const AddPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        setImages([...images, e.target.files[0]])
        // @ts-ignore
        setData({...data, images: [...data.images, URL.createObjectURL(e.target.files[0])]})
    }

    const AddDocument = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        setDocuments([...documents, e.target.files[0]])
        // @ts-ignore
        setData({...data, documents: [...data.documents, {name: e.target.files[0].name, url: URL.createObjectURL(e.target.files[0])}]})
    }

    const CreateObject = () => {

    }

    return(
        <>
            <TopNavbar />
            <div className={'w-full box-border pt-[150px] pb-[150px] pl-[25%] pr-[25%] flex flex-col'}>
                <p className={'text-[24px] font-bold'}>Добавление объекта недвижемости</p>
                <div className={'mt-[30px] w-full'}>
                    <p className={'text-[18px] font-bold'}>Данные объекта</p>
                    <div className={'mt-[50px] border-[1px] shadow-xl rounded-md box-border p-[30px]'}>
                        {data.data.map((item: any, index: number) => (
                            <ObjectField data={data} setData={setData} isEditData={true} item={item} index={index} key={index}/>
                        ))}
                        <div className={'flex flex-row justify-end'}>
                            <button className={'w-[150px] h-[40px] bg-blue-400 text-white rounded-md mt-4 mr-4'} onClick={CreateField}>
                                Добавить поле
                            </button>
                        </div>
                    </div>
                    <div className={'flex flex-row items-center h-[50px] mt-[50px] mb-[50px]'}>
                        <p className={'text-[18px] font-bold'}>Фото/видео материалы</p>
                        <input type={'file'} className={'ml-auto'} onChange={(e) => AddPhoto(e)}/>
                    </div>
                    <div className={'grid grid-cols-2 gap-[50px]'}>
                        {data.images.map((image: string) => (
                            <ObjectImage image_src={image} key={image} />
                        ))}
                    </div>
                    <div className={'flex flex-row items-center h-[50px] mt-[50px] mb-[50px]'}>
                        <p className={'text-[18px] font-bold'}>Документы</p>
                        <input type={'file'} className={'ml-auto'} onChange={(e) => AddDocument(e)}/>
                    </div>
                    <div className={'flex flex-col mt-[50px]'}>
                        {data.documents.map((document: any) => (
                            <DocumentField document={document} key={document.url}/>
                        ))}
                    </div>
                    <div className={'flex flex-row justify-center'}>
                        <button className={'w-[150px] h-[40px] bg-blue-400 text-white rounded-md'} onClick={CreateObject}>
                            Добавить объект
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}