import {
    FETCHING_RESTAURANT,
    FETCHING_RESTAURANT_SUCCESS,
    FETCHING_RESTAURANT_FAILURE,
    NO_RESTAURNAT_DATA,
} from '../constants/constants'
import FirebaseService from '../services/firebase-service'

export function fetchRestaurantFromFirebase(){
    return (dispatch) =>{
        dispatch(getRestaunrant())
        try {
            const restaurantId = '0'
            FirebaseService.child('restaurants').child(restaurantId).on('value',(snap)=>{
                console.log('snap: ',snap.val());
                
                if(snap.val() == null){
                    dispatch(noRestaurantData())
                }else{
                    dispatch(getRestaurantSuccess(snap.val()))
                }    
            })    
        } catch (error) {
            dispatch(getRestaurantFailure())
        }
    }
}

export function getRestaunrant(){
    return{
        type: FETCHING_RESTAURANT
    }
}

export function noRestaurantData(){
    return{
        type: NO_RESTAURNAT_DATA
    }
}

export function getRestaurantSuccess(restaurant){
    return{
        type: FETCHING_RESTAURANT_SUCCESS,
        restaurant,
    }
}

export function getRestaurantFailure(){
    return{
        type: FETCHING_RESTAURANT_FAILURE
    }
}
