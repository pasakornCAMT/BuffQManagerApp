import { combineReducers } from 'redux'
import restaurant from './restaurant'

//For dismiss the warning message
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
console.ignoredYellowBox = [ 'Setting a timer' ]

const rootReducer = combineReducers({
    restaurant
})

export default rootReducer
