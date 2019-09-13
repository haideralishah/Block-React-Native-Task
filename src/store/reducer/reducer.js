import ActionTypes from '../constant';

const INITIAL_STATE = {
    USER: '',
    LIST: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.USER:
            return ({
                ...state,
                USER: action.payload
            })
        case ActionTypes.LIST:
            return ({
                ...state,
                LIST: action.payload
            })
        default:
            return state;
    }

}