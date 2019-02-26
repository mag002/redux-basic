const initialState = {
  counter: 5,
  result: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD_FIVE":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "SUB_FIVE":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "STORE_RESULT":
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: state.counter })
      };
    case "DELETE_RESULT":
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
