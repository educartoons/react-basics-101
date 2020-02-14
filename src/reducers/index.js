import { combineReducers } from 'redux';
import theme from './theme';
import location from './location';

export default combineReducers({
  theme,
  location
});
