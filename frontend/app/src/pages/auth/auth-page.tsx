import * as React from 'react'
//import axios from "axios";

import { useNavigate } from "react-router-dom";

export function AuthPage(){

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const redirect = useNavigate();

    const SignIn = () => {
        // const promise = axios({
        //     method: 'post',
        //     url: ``,
        //     data: {}
        // })
        // promise.then((res) => {
        //     redirect('/main');
        // })
        redirect('/main')
    }

    return(
        <>
            <div className={'w-[400px] h-[500px] shadow-xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute rounded-[10px] box-border p-[20px] border-[1px]'}>
                <div className={'flex flex-col h-full'}>
                    <p className={'font-bold text-[24px] text-center'}>Авторизация</p>
                    <div className={'mt-[60px]'}>
                        <label className={'font-black'}>Почта</label>
                        <div className={'border-[1px] h-[40px] rounded-[10px] box-border p-[5px] mt-1'}>
                            <input className={'outline-none rounded-md h-full w-full'} value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className={'mt-[35px]'}>
                        <label className={'font-black'}>Пароль</label>
                        <div className={'border-[1px] h-[40px] rounded-[10px] box-border p-[5px] mt-1'}>
                            <input className={'outline-none rounded-md h-full w-full'} type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <button className={'w-[100px] h-[40px] bg-blue-400 text-white rounded-md mt-auto mb-0 ml-auto mr-auto'} onClick={SignIn}>
                        Войти
                    </button>
                </div>
            </div>
        </>
    )

}