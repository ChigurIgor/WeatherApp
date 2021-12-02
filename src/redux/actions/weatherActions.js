export const getWeather = (city) => {
    return dispatch => {
        let data = {
            _id: _id,
            token: token,
        }
        axios.post(BASE_URL+URL_GET_USER_BY_ID,
            data
        )
            .then(response=> {
                dispatch(setRequesterAction(response.data));
            })
            .catch(err => {
                dispatch(errorAction(err));
            });
    }
}