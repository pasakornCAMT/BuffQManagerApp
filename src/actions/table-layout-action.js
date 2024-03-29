import {
    FETCHING_TABLE,
    FETCHING_TABLE_SUCCESS,
    FETCHING_TABLE_FAILURE,
    GET_SUGGEST_TABLES_SUCCESS,
} from '../constants/constants'
import FirebaseService from '../services/firebase-service'

export function fetchTableLayoutFromFirebase() {
    return (dispatch) => {
        dispatch(getTableLayout())
        try {
            resId = FirebaseService.auth().currentUser.uid;
            FirebaseService.database().ref().child('tables').child(resId).on('value', (snap) => {
                dispatch(getTableLayoutSuccess(snap.val()))
            })
        } catch (error) {
            dispatch(getTableLayoutFailure())
        }
    }
}

export function getTableLayout() {
    return {
        type: FETCHING_TABLE
    }
}

export function getTableLayoutSuccess(tableLayout) {
    return {
        type: FETCHING_TABLE_SUCCESS,
        tableLayout,
    }
}

export function getTableLayoutFailure() {
    return {
        type: FETCHING_TABLE_FAILURE
    }
}

export function getSuggestTables(numOfCustomer) {
    return (dispatch) => {
        try {
            resId = FirebaseService.auth().currentUser.uid;
            FirebaseService.database().ref().child('tables').child(resId)
                .orderByChild('available').equalTo(true).once('value', (snap) => {
                    console.log('table: ', snap.val())
                    var data = []
                    snap.forEach((tab) => {
                        if (tab.val().seat) {
                            data.push(tab.val())
                        }
                    })
                    var filterTable = subset_sum(data, numOfCustomer);
                    dispatch(getSuggestTablesSuccess(filterTable));
                })
        } catch (error) {

        }
    }
}

export function testTable() {
    FirebaseService.database().ref().child('tables').child('5WmrSonECnNqBLIUQzlgA7i4T0I3')
        .orderByChild('available').equalTo(true).once('value', (snap) => {
            var data = []
            snap.forEach((tab) => {
                if (tab.val().seat) {
                    data.push(tab.val())
                }
            })
            console.log(data)
        })
}

export function getSuggestTablesSuccess(tables) {
    return {
        type: GET_SUGGEST_TABLES_SUCCESS,
        tables
    }
}

export function subset_sum(tables, num) {

    tables.sort(function (a, b) {
        return b.seat - a.seat;
    });

    run = true;
    r = num;
    i = 0;
    max = tables.length;
    r2 = 0;
    result = [];
    while (run) {
        var set = [];
        if (tables[i].seat >= r) {
            set.push(tables[i]);
            //console.log(set);
            result.push(set)
        } else {
            while (i < max) {
                var set = [];
                r = num;
                _i = i
                sum = 0;
                while (r > 0 && _i < max) {
                    set.push(tables[_i]);
                    sum = sum + tables[_i].seat;
                    r = r - tables[_i].seat;
                    _i++;
                }
                if (sum >= num) {
                    //console.log(set)
                    result.push(set)
                }
                i++;
            }
            run = false;
        }
        if (i == max - 1) {
            run = false;
        } else {
            i++;
        }
    }
    return result;
}

export function fetchMergeTables() {
    try {
        resId = FirebaseService.auth().currentUser.uid;
        FirebaseService.database().ref().child('tables').child(resId)
            .orderByChild('available').equalTo(true).on('value', (snap) => {
                var filterTable = subset_sum(snap.val(), 8);
                return filterTable
            })
    } catch (error) {

    }
}

