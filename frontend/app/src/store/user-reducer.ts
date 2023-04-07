const user = {
    id: 0,
    first_name: '',
    second_name: '',
    last_name: '',
    email: '',
    phone: '',
    role: '',
    image_src: '',
}

export function userReducer(state = user, action: any){
    switch (action.type){
        default:
            return {...state}
        case "setUser":
            return {...action.user}
    }
}