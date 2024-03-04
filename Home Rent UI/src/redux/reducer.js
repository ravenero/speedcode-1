import {combineReducers} from 'redux';

const initialExampleReducer = {};

const exampleReducer = (state = initialExampleReducer, action) => {
  if (action.type === 'SET_EXAMPLE') {
    return action.value;
  }

  return state;
};

const reducer = combineReducers({exampleReducer});

export default reducer;
