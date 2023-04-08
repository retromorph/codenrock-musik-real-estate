import * as React from "react";
import { useParams } from "react-router-dom";

import { TopNavbar } from "../components/top-navbar";
import {ObjectField} from "../create-work-group/object-field";
import {ObjectImage} from "../create-work-group/object-image";
import {DocumentField} from "../create-work-group/document-field";


export function ObjectPage(){

    let { id } = useParams();

    const [data, setData] = React.useState({
        name: 'Объект 1',
        data: [
            {field: 'Округ', value: 'ЗАО', changeField: false},
            {field: 'Район', value: 'Можайский', changeField: false},
            {field: 'Адрес', value: 'г. Москва, ул. Беловежская, вл. 4', changeField: false},
            {field: 'Тип объекта', value: 'Прочее', changeField: false},
            {field: 'Cостояние объекта', value: 'Обладает признаками СС', changeField: false},
            {field: 'Площадь объекта', value: '5184.50', changeField: false},
            {field: 'Собственник', value: 'Иван Дмитриевич Кожухов', changeField: false},
            {field: 'Фактический пользователь', value: 'Не известно', changeField: false}
        ],
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/e/ee/Russia._%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0._%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C_%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B0_IMG_2625.3_2022_e1w.jpg",
            "https://um.mos.ru/upload/iblock/39f/5f3iame4c476ov57g1vdg5j4gcmxggo0/55555.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/3a/cb/0b/caption.jpg?w=700&h=-1&s=1",
            "https://www.pogostite.ru/images/1280/960/0/admin/images/33/metropol_metropol_19.jpg",
        ],
        documents: [
            {name: "Документ 1", url: 'sddsdsdsdsdsdssdds1'},
            {name: "Документ 2", url: 'sddsdsdsdsdsdssdds2'},
            {name: "Документ 3", url: 'sddsdsdsdsdsdssdds3'},
            {name: "Документ 4", url: 'sddsdsdsdsdsdssdds4'},
            {name: "Документ 5", url: 'sddsdsdsdsdsdssdds5'},
        ]
    })

    const [isEditData, setIsEditData] = React.useState(false)

    const CreateField = () => {
        const newData = {...data}
        newData.data.push({field: '', value: '', changeField: true})
        setData({...newData})
    }

    return(
        <>
            <TopNavbar />
            <div className={'w-full box-border pt-[150px] pb-[150px] pl-[25%] pr-[25%] flex flex-col'}>
                <p className={'text-[24px] font-bold'}>{data.name}</p>
                <div className={'mt-[30px] w-full'}>
                    <p className={'text-[18px] font-bold'}>Данные объекта</p>
                    <div className={'mt-[50px] border-[1px] shadow-xl rounded-md box-border p-[30px]'}>
                        {data.data.map((item: any, index: number) => (
                            <ObjectField data={data} setData={setData} isEditData={isEditData} item={item} index={index} key={index}/>
                        ))}
                        <div className={'flex flex-row justify-end'}>
                            {isEditData && (
                                <button className={'w-[150px] h-[40px] bg-blue-400 text-white rounded-md mt-4 mr-4'} onClick={CreateField}>
                                    Добавить поле
                                </button>
                            )}
                            <button className={'w-[150px] h-[40px] bg-blue-400 text-white rounded-md mt-4'} onClick={() => setIsEditData(value => !value)}>
                                {isEditData ? 'Сохранить' : 'Редактировать'}
                            </button>
                        </div>
                    </div>
                    <div className={'flex flex-row items-center h-[50px] mt-[50px] mb-[50px]'}>
                        <p className={'text-[18px] font-bold'}>Фото/видео материалы</p>
                        <input type={'file'} className={'ml-auto'} />
                    </div>
                    <div className={'grid grid-cols-2 gap-[50px]'}>
                        {data.images.map((image: string) => (
                            <ObjectImage image_src={image} key={image}/>
                        ))}
                    </div>
                    <div className={'flex flex-row items-center h-[50px] mt-[50px] mb-[50px]'}>
                        <p className={'text-[18px] font-bold'}>Документы</p>
                        <input type={'file'} className={'ml-auto'} />
                    </div>
                    <div className={'flex flex-col mt-[50px]'}>
                        {data.documents.map((document: any) => (
                            <DocumentField document={document} key={document.url}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )

}