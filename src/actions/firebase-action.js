import FirebaseService from '../services/firebase-service'
import moment from 'moment';

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let hours = new Date().getHours();
let min = new Date().getMinutes();
let pressDate = days[new Date().getDay()] + ' ' + date + '-' + month + '-' + year + ' ' + hours + ':' + min;

export function insertNewBookingToFirebase(booking, hasChild, hasDrink, resId, price) {
    const userId = '0'
    console.log('new booking: ', booking)
    //const bookingRef = FirebaseService.database().ref().child('bookings').child('users').child('1')
    const bookingRef = FirebaseService.database().ref().child('bookings').child('online')
    insertBooking = {
        customer: booking.name,
        phone: booking.phoneNumber,
        timeText: booking.timeText,
        dateText: booking.dateText,
        dateText_timeText: booking.dateText + '_' + booking.timeText,
        payment: false,
        totalPrice: price,
        resId: resId,
        pressDate: pressDate,
        numOfCustomer: booking.numOfCustomer,
        status: 'booking',
        status_dateText_resId: 'booking_'+booking.dateText+'_'+booking.restaurantId,
        type: 'walkIn'
    }
    if (hasDrink) {
        insertBooking.includeDrink = booking.drink
    }
    if (hasChild) {
        insertBooking.numOfCustomer = booking.numOfAdult + booking.numOfChild
        insertBooking.numOfAdult = booking.numOfAdult
        insertBooking.numOfChild = booking.numOfChild
    }
    try {
        var data = bookingRef.push(insertBooking)
        var key = data.getKey()
        bookingRef.child(key).update({
            id: key
        })
        FirebaseService.database().ref().child('restaurantBookings').child(resId).child(key).set(true)
    } catch (error) {

    }
}
export function closeRestaurant() {
    resId = FirebaseService.auth().currentUser.uid;
    FirebaseService.database().ref().child('restaurants').child(resId).update({
        status: 'close'
    })
}
export function openRestaurant() {
    resId = FirebaseService.auth().currentUser.uid;
    FirebaseService.database().ref().child('restaurants').child(resId).update({
        status: 'open'
    })
}
export function assignBookingToTable(booking, table) {
    const resId = FirebaseService.auth().currentUser.uid;
    data = {
        bookingId: '',
        customer: '',
        customer_phone: '',
        available: true
    }
    if (table.available) {
        data = {
            bookingId: booking.id,
            customer: booking.customer,
            customer_phone: booking.customer + '_' + booking.phone,
            available: false
        }
    }
    FirebaseService.database().ref().child('tables').child(resId).child(table.id).update(data)
}

export function changeStatusToEating(id) {
    FirebaseService.database().ref().child('bookings').child('online').child(id).update({
        status: 'eating',
        startEating: getCurrentTime()
    })
}

export function resetAssign(tableId) {
    const resId = FirebaseService.auth().currentUser.uid;
    FirebaseService.database().ref().child('tables').child(resId).child(tableId).update({
        available: true,
        bookingId: '',
        customer: '',
        customer_phone: 'empty',
    })
}

export function changeStatusWhenPressNext(booking) {
    console.log('bookingId: ',booking.id)
    // const bookingRef = FirebaseService.database().ref().child('bookings').child('users').child('1').child(booking.id);
    const bookingRef = FirebaseService.database().ref().child('bookings').child('online').child(booking.id);

    var data = {
        status: '',
        status_dateText_resId: ''
    }
    switch (booking.status) {
        case 'booking':
            data.status = 'arriving'
            data.status_dateText_resId = 'arriving_'+booking.dateText+'_'+booking.restaurantId
            data.startArriving = getCurrentTime()
            break;
        case 'arriving':
            data.status = 'eating'
            data.status_dateText_resId = 'eating_'+booking.dateText+'_'+booking.restaurantId
            data.startEating = getCurrentTime()
            break;
        case 'eating':
            data.status = 'finishing'
            data.status_dateText_resId = 'finishing_'+booking.dateText+'_'+booking.restaurantId
            data.finishTime = getCurrentTime()
            data.waitingTime = calculateLengthTime(booking.startEating, booking.startArriving)
            data.eatingTime = calculateLengthTime(getCurrentTime(), booking.startEating)
            data.payment = true
            insertToDataHistory(booking, data.finishTime, data.waitingTime, data.eatingTime)
            setTableToAvailableByBookingId(booking.id)
            break;
        default:
            data.status = booking.status
            data.status_dateText_resId = booking.status+'_'+booking.dateText+'_'+booking.restaurantId
            break;
    }
    bookingRef.update(data);
}

export function changeStatusWhenPressBack(booking) {
    // const bookingRef = FirebaseService.database().ref().child('bookings').child('users').child('1').child(booking.id);
    const bookingRef = FirebaseService.database().ref().child('bookings').child('online').child(booking.id);
    var data = {
        status: '',
    }
    switch (booking.status) {
        case 'arriving':
            data.status = 'booking'
            data.status_dateText_resId = 'booking_'+booking.dateText+'_'+booking.restaurantId
            break;
        case 'eating':
            data.status = 'arriving'
            data.status_dateText_resId = 'arriving_'+booking.dateText+'_'+booking.restaurantId
            break;
        case 'finishing':
            data.status = 'eating'
            data.status_dateText_resId = 'eating_'+booking.dateText+'_'+booking.restaurantId
            break;
        default:
            data.status = booking.status
            data.status_dateText_resId = booking.status+'_'+booking.dateText+'_'+booking.restaurantId
            break;
    }
    bookingRef.update(data);
}

export function getCurrentTime() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

export function calculateLengthTime(time1, time2) {
    var a = moment(time1)
    var b = moment(time2)
    return a.diff(b, 'minutes')

}

export function insertToDataHistory(booking, finishTime, waitingTime, eatingTime) {
    const historyRef = FirebaseService.database().ref().child('data-history').child(booking.restaurantId)
    const historyData = {
        bookingId: booking.id,
        startArriving: booking.startArriving,
        waitingTime: waitingTime,
        startEating: booking.startEating,
        eatingTime: eatingTime,
        finishTime: finishTime,
        totalTime: waitingTime + eatingTime,
        dateText_timeText: booking.dateText_timeText,
    }
    var data = historyRef.push(historyData)
    var key = data.getKey()
    historyRef.child(key).update({
        id: key
    })
}

export function setTableToAvailableByBookingId(bookingId) {
    resId = FirebaseService.auth().currentUser.uid;
    const tablesRef = FirebaseService.database().ref().child('tables').child(resId)
    tablesRef.on('value', (snap) => {
        var tables = snap.val()
        Object.values(tables).map((table) => {
            if (table.bookingId == bookingId) {
                tablesRef.child(table.id).update({
                    available: true,
                    bookingId: '',
                    customer: '',
                    customer_phone: '',
                })
            }
        })
    })
}

export function updateBookingIntoFirebase(booking, updatedData){
    const bookingRef = FirebaseService.database().ref().child('bookings').child('online').child(booking.id)
    bookingRef.update(updatedData)
}

export function removeBookingFromFirebase(id){
    //FirebaseService.database().ref().child('bookings').child('users').child('1').child('aaa').remove()
}

export function getBookingFromId(id){
    try {
        FirebaseService.database().ref().child('bookings').child('online').child(id).on('value',(snap)=>{
            return snap.val()
        })  
    } catch (error) {
        
    }

}

//Authentication

export function login(email, password) {
    try {
        return FirebaseService.auth().signInWithEmailAndPassword(email, password).then(() => {
            FirebaseService.auth().onAuthStateChanged(function (manager) {
                console.log('manager: ', manager);
            });
        }).catch((error) => {
            const { code, message } = error;
            console.log('code: ', code)
            console.log('message: ', message)
        })
    } catch (error) {
        console.log(error)
    }
}

export function logout() {
    FirebaseService.auth().signOut();
}


