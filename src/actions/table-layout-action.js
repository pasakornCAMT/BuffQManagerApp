import {
    FETCHING_TABLE,
    FETCHING_TABLE_SUCCESS,
    FETCHING_TABLE_FAILURE,
    GET_SUGGEST_TABLES_SUCCESS,
} from '../constants/constants'
import FirebaseService from '../services/firebase-service'

export function fetchTableLayoutFromFirebase(){
    return (dispatch) => {
        dispatch(getTableLayout())
        try {
            resId = FirebaseService.auth().currentUser.uid;
            FirebaseService.database().ref().child('tables').child(resId).on('value',(snap)=>{
                dispatch(getTableLayoutSuccess(snap.val()))
            })
        } catch (error) {
            dispatch(getTableLayoutFailure())
        }
    }
}

export function getTableLayout(){
    return{
        type: FETCHING_TABLE
    }
}

export function getTableLayoutSuccess(tableLayout){
    return{
        type: FETCHING_TABLE_SUCCESS,
        tableLayout,
    }
}

export function getTableLayoutFailure(){
    return{
        type: FETCHING_TABLE_FAILURE
    }
}

export function getSuggestTables(){
    return (dispatch) =>{
        try {
            resId = FirebaseService.auth().currentUser.uid;
            FirebaseService.database().ref().child('tables').child(resId)
            .orderByChild('available').equalTo(true).on('value',(snap)=>{
                dispatch(getSuggestTablesSuccess(snap.val()));
            })
        } catch (error) {

        }
    }
}

export function getSuggestTablesSuccess(tables){
    return{
        type: GET_SUGGEST_TABLES_SUCCESS,
        tables
    }
}