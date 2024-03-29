import * as actionTypes from "./action";

const initialState = {
  counter: 5,
  result: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD_FIVE:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUB_FIVE:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: state.counter })
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.result.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        result: updatedArray
      };
  }

  return state;
};
export default reducer;
