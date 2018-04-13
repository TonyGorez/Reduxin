import express from 'express';
import { createStore, combineReducers } from 'redux';


const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

// STORE
const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer
})
const store = createStore(rootReducer);

// ACTIONS
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
};

const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
};

// REDUCERS
function todosReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.text]
      break;
    default:
      return state
  }
}

function filterReducer(state = '', action) {
  switch(action.type) {
    case 'SET_FILTER':
      return action.filter
      break;
    default:
      return state
  }
}


// DISPATCH
store.dispatch(addTodo('apprendre redux'));
console.log(store.getState());
store.dispatch(setFilter('tomate'));
console.log(store.getState());