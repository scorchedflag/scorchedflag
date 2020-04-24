export const SET_FLAGS = 'SET_FLAGS'
export const ADD_FLAG = 'ADD_FLAG'
export const FETCH_FLAGS = 'FETCH_FLAGS'

export const addFlag = (flag) => {
    return {type: ADD_FLAG, flag}
}

export const fetchFlags = () => {
    return dispatch => 
        fetch("http://localhost:3001/flags")
        .then(res => res.json())
        .then(data => {
            dispatch(setFlags(data))
        })
}

export const setFlags = (flags) => {
    return {type: SET_FLAGS, flags}
}