import { combineReducers } from 'redux';

import rl from './components/form/rl';

export default combineReducers({ [rl.nameSpace]: rl.reducer });