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
    console.log('new booking: ', booking)
    const bookingRef = FirebaseService.child('bookings').child('walk-in')
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
        numOfCustomer: booking.numOfCustomer

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
    } catch (error) {

    }
}
export function closeRestaurant() {
    FirebaseService.child('restaurants').child('0').update({
        status: 'close'
    })
}
export function openRestaurant() {
    FirebaseService.child('restaurants').child('0').update({
        status: 'open'
    })
}
export function assignBookingToTable(booking, id) {
    const resId = '0'
    FirebaseService.child('tables').child(resId).child(id).update({
        bookingId: booking.id,
        customer: booking.customer,
        customer_phone: booking.customer + '_' + booking.phone,
        available: false
    })
}

export function changeStatusToEating(id) {
    FirebaseService.child('bookings').child('users').child('1').child(id).update({
        status: 'eating',
        startEating: getCurrentTime()
    })
}

export function resetAssign(tableId) {
    const resId = '0'
    FirebaseService.child('tables').child(resId).child(tableId).update({
        available: true,
        bookingId: '',
        customer: '',
        customer_phone: 'empty',
    })
}

export function changeStatusWhenPressNext(booking) {
    const bookingRef = FirebaseService.child('bookings').child('users').child('1').child(booking.id);
    var data = {
        status: '',
    }
    switch (booking.status) {
        case 'booking':
            data.status = 'arriving'
            data.startArriving = getCurrentTime()
            break;
        case 'arriving':
            data.status = 'eating'
            data.startEating = getCurrentTime()
            break;
        case 'eating':
            data.status = 'finishing'
            data.finishTime = getCurrentTime()
            data.waitingTime = calculateLengthTime(booking.startEating, booking.startArriving)
            data.eatingTime = calculateLengthTime(getCurrentTime(), booking.startEating)
            insertToDataHistory(booking, data.finishTime, data.waitingTime, data.eatingTime)
            break;
        default:
            data.status = booking.status
            break;
    }
    bookingRef.update(data);
}

export function changeStatusWhenPressBack(booking) {
    const bookingRef = FirebaseService.child('bookings').child('users').child('1').child(booking.id);
    let bookingStatus = '';
    var data = {
        status: '',
    }
    switch (booking.status) {
        case 'arriving':
            data.status = 'booking'
            break;
        case 'eating':
            data.status = 'arriving'
            break;
        case 'finishing':
            data.status = 'eating'
            break;
        default:
            data.status = booking.status
            break;
    }
    bookingRef.update(data);
}

function getCurrentTime() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

function calculateLengthTime(time1, time2) {
    var a = moment(time1)
    var b = moment(time2)
    return a.diff(b, 'seconds')

}

function insertToDataHistory(booking, finishTime, waitingTime, eatingTime) {
    const historyRef = FirebaseService.child('data-history').child('0')
    const historyData = {
        bookingId: booking.id,
        startArriving: booking.startArriving,
        waitingTime: waitingTime,
        startEating: booking.startEating,
        eatingTime: eatingTime,
        finishTime: finishTime,
        totalTime: waitingTime + eatingTime
    }
    var data = historyRef.push(historyData)
    var key = data.getKey()
    historyRef.child(key).update({
        id: key
    })
}

