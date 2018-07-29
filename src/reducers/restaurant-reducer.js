import {
    FETCHING_RESTAURANT,
    FETCHING_RESTAURANT_SUCCESS,
    FETCHING_RESTAURANT_FAILURE,
    NO_RESTAURNAT_DATA,
} from '../constants/constants'

const restaurantState = {
    restaurant: [],
    isFetching: false,
    isNoData: false,
    isError: false,
}

export default function restaurantReducer(state = restaurantState, action){
    switch (action.type) {
        case FETCHING_RESTAURANT:
            return{
                ...state,
                isFetching: true,
            }
        case FETCHING_RESTAURANT_SUCCESS:
            return{
                ...state,
                restaurant: action.restaurant,
                isFetching: false,
                isNoData: false,
                isError: false,
            }
        case FETCHING_RESTAURANT_FAILURE:
            return{
                ...state,
                isFetching: false,
                isNoData: false,
                isError: true,
            }
        case NO_RESTAURNAT_DATA:
            return{
                ...state,
                isFetching: false,
                isNoData: true,
                isError: false,
            }              
        default: 
            return state
    }
}