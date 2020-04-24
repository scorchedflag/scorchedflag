import {SET_FLAGS, ADD_FLAG} from '../actions/FlagActions'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_FLAG:
            return [...state, action.flag]
        case SET_FLAGS:
            return action.flags
        default:
            return state
    }
}