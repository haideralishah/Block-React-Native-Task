import ActionTypes from '../constant';

const INITIAL_STATE = {
    USER: '',
    LIST: [
        {
            id: 'bd7acea-c1b1-46c2-aed5-3d53abb28a',
            title: 'First Item',
        },
        {
            id: '3ac8afc-c605-48d3-a4f8-fd91aa97f3',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da-471f-bd96-14571e29d2',
            title: 'Third Item',
        },
        {
            id: 'bd7acbeac1b1-46c2-aed5-3a53abb28a',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fb91aa97f3',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-b96-14551e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7aca-c1b1-46c2-aed-3ad53bb28ba',
            title: 'First Item',
        },
        {
            id: '3ac6fc-c605-48d3-a4f8-bd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-1451e29d72',
            title: 'Third Item',
        },
    ]
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