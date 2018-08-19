import {
    FETCHING_DATA_HISTORY,
    FETCHING_DATA_HISTORY_SUCCESS,
    FETCHING_DATA_HISTORY_FAILURE,
    NO_DATA_HISTORY,
} from '../constants/constants'
import FirebaseService from '../services/firebase-service'

export function fetchDataHistoryFromFirebase(){
    var resId = '0'
    var waiting = []
    var eating = []
    var total = []
    return (dispatch) => {
        dispatch(getDataHistory())
        try {
            FirebaseService.child('data-history').child(resId).on('value',(snap)=>{
                if(snap.val() == null){
                    dispatch(noDataHistory())
                }else{
                    
                    Object.values(snap.val()).map((item)=>{
                        waiting.push(item.waitingTime)
                        eating.push(item.eatingTime)
                        total.push(item.totalTime)
                    })
                    const w = Math.round(average(waiting))
                    const e = Math.round(average(eating))
                    const t = Math.round(average(total))
                    console.log('w: ',waiting)
                    console.log('e: ',eating)
                    console.log('t: ',total)
                    dispatch(getDataHistorySuccess(snap.val(),w,e,t))
                    waiting = []
                    eating = []
                    total = []
                }
            })
        } catch (error) {
            dispatch(getDataHistoryFailure())
        }
    }
}

export function getDataHistory(){
    return{
        type: FETCHING_DATA_HISTORY
    }
}

export function getDataHistorySuccess(data, waiting, eating, total){
    return{
        type: FETCHING_DATA_HISTORY_SUCCESS,
        data,
        waiting,
        eating,
        total,
    }
}

export function getDataHistoryFailure(){
    return{
        type: FETCHING_DATA_HISTORY_FAILURE
    }
}

export function noDataHistory(){
    return{
        type: NO_DATA_HISTORY
    }
}

export function average(arr){
    return arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
}