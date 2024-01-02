import { combineReducers }from 'redux'
import updateValue  from './updater'
import updateColor from './Bgupdater'
const rootReducer =combineReducers({
    updateValue,
    updateColor
})
export default rootReducer