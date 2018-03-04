import {SET_DATA} from "../actionTypes"



const initialState = {
    "get_active": []
}

const handlers = {
    [SET_DATA]: (_, action) => {
        return action.data
    },
}




export default function ActivePageData (state = initialState, action ){
    let handler = handlers[action.type];
    if (!handler) return state;
    return { ...state, ...handler(state, action) };
}