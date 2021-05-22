import { LOGIN } from '../action/auth';

const initialState = {
    users: {
        email: '',
        nama: '',
        no_telepon: ''
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            const { email, nama, no_telepon } = action.data;
            return {
                users: {
                    email, nama, no_telepon
                }
            }
        default:
            break;
    }
    return state
}

export default authReducer