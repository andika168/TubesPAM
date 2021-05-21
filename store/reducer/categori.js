import { exp } from "react-native-reanimated"

const initialState ={
    categori: []
}

const categoriReducer = (state = initialState, action) =>{
    switch (action.type){
        case "TES":
            return state
        default:
            return state
    }
}

export default categoriReducer