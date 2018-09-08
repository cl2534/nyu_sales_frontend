
export default (state = [], action) => {


  switch(action.type) {
    case 'GET_POSTS':
    debugger
      return [
        ...action.payload
      ]
    default:
      return state;
  }
}
