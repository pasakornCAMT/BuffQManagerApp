import FirebaseService from '../services/firebase-service'

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let hours = new Date().getHours();
let min = new Date().getMinutes();
let pressDate = days[new Date().getDay()] + ' ' + date + '-' + month + '-' + year + ' ' + hours + ':' + min;

export function insertNewBookingToFirebase(booking, hasChild, hasDrink, resId) {
    console.log('new booking: ', booking)
    const bookingRef = FirebaseService.child('bookings').child('walk-in')
    insertBooking = {
        customer: booking.name,
        phone: booking.phoneNumber,
        timeText: booking.timeText,
        dateText: booking.dateText,
        dateText_timeText: booking.dateText + '_' + booking.timeText,
        payment: false,
        totalPrice: 0,
        resId: resId,
        pressDate: pressDate,
        numOfCustomer: booking.numOfCustomer

    }
    if(hasDrink){
        insertBooking.includeDrink = booking.drink
    }
    if(hasChild){
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
export function assignBookingToTable(booking, id){
    const resId = '0'
    FirebaseService.child('tables').child(resId).child(id).update({
        bookingId: booking.id,
        customer: booking.customer,
        customer_phone: booking.customer+'_'+booking.phone,
        available: false
    })
}

export function changeStatusToEating(id){
    FirebaseService.child('bookings').child('users').child('1').child(id).update({
        status: 'eating'
    })
}

export function resetAssign(tableId){
    const resId = '0'
    FirebaseService.child('tables').child(resId).child(tableId).update({
        available: true,
        bookingId: '',
        customer: '',
        customer_phone: 'empty',
    })
}