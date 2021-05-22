export const LOGIN = 'LOGIN';

export const loginActions = (email, password) => {
    return dispatch => {
        fetch('http://localhost/TubesPAM-CI-API/api/users/login')
            .then(response => response.json())
            .then(responseJSON => {
                dispatch({
                    type: LOGIN,
                    data: responseJSON
                })
            })
            .catch(err => alert('Gagal login'))
    }
}