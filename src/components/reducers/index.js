import { combineReducers } from 'redux'

import reducerColor from './reducer_color.js'
import reducerFont from './reducer_font.js'



const rootReducer = combineReducers({
   colorText: reducerColor,
   fontText: reducerFont,

});

export default rootReducer;
