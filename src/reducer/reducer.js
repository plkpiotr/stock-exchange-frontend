const initialState = {
  test: 'test',
};

const reducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
};

export default reducer;
