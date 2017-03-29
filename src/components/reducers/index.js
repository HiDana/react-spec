import { combineReducers } from 'redux'

import reducerColor from './reducer_color.js'



const rootReducer = combineReducers({
   colorText: reducerColor,

});

export default rootReducer;
