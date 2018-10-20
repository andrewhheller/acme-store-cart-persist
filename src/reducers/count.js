// action constant
const SET_COUNT = 'SET_COUNT';


// action creator
const _setCount = count => {
  return {
    type: SET_COUNT,
    count
  }
}


// reducer
const countReducer = (state = 0, action) => {

  switch(action.type) {
    case SET_COUNT:
      state = action.count;
      break;
  }

  return state;
}


export {
  countReducer,
  _setCount
}
