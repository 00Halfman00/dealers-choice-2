import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';

//////////ACTION TYPES/////////////CRUD
const CREATE_FELLOW = 'CREATE_FELLOW';
const READ_FELLOWS = 'READ_FELLOWS';
const UPDATE_FELLOW = 'UPDATE_FELLOW';
const DELETE_FELLOW = 'DELETE_FELLOW';

/////////ACTION CREATORS///////////CRUD
//fellow obj
const _createFellow = (fellow) => {
  return {
    type: CREATE_FELLOW,
    fellow,
  };
};
//fellows obj
const _readFellows = (fellows) => {
  return {
    type: READ_FELLOWS,
    fellows,
  };
};
//fellow obj
const _updateFellow = (fellow) => {
  return {
    type: UPDATE_FELLOW,
    fellow,
  };
};
//fellow id
const _deleteFellow = (id) => {
  return {
    type: DELETE_FELLOW,
    id,
  };
};

//////////////THUNKS///////////////CRUD

const createFellow = ({ name }) => {
  return async (dispatch) => {
    const fellow = await axios.post('/api/fellows', { name });
    disdpatch(_createFellow(fellow.data));
  };
};

const readFellows = () => {
  return async (dispatch) => {
    const fellows = await axios.get('/api/fellows');
    dispatch(_readFellows(fellows.data));
  };
};

const updateFellow = ({ name, id }) => {
  return async (dispatch) => {
    const fellow = await axios.put(`/api/fellows/${id}`, { name });
    dispatch(_updateFellow(fellow.data));
  };
};

const deleteFellow = ({ id }) => {
  return async (dispatch) => {
    const fellow = await axios.delete(`/api/fellows/${id}`);
    dispatch(_deleteFellow(fellow.data));
  };
};

/////////////fellows reducer////////////////////
const fellowsReducer = (state = [], action) => {
  if (action.type === CREATE_FELLOW) {
    state = [action.fellow, ...state];
  }
  if (action.type === READ_FELLOWS) {
    state = action.fellows;
  }
  if (action.type === UPDATE_FELLOW) {
    state = state.map((fellow) =>
      fellow.id === action.fellow.id ? action.fellow : fellow
    );
  }
  if (action.type === DELETE_FELLOW) {
    state = state.filter((fellow) => fellow.id !== action.id * 1);
  }
  return state;
};

////////////combine reducer/////////////
const reducer = combineReducers({
  fellows: fellowsReducer,
});
////////////create store/////////////////
const store = createStore(reducer, applyMiddleware(thunk, logger));
////////////////default export, export//////////////
export default store;
export { readFellows, updateFellow, deleteFellow, createFellow };
