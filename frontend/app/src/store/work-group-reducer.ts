const workGroups = {
    workGroups: []
}

export function workGroupReducer(state = workGroups, action: any){
    switch (action.type){
        default:
            return {...state}
        case "setWorkGroups":
            return {workGroups: [...action.workGroups]}
    }
}