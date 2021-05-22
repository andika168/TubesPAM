import { SHOW_CATEGORI } from "../action/categori"

const initialState ={
    categori: []
}

const categoriReducer = (state = initialState, action) =>{
    switch (action.type){
        case SHOW_CATEGORI:
            return {
                ...state,categori:action.data
            }
        default:
            return state
    }
}

export default categoriReducer