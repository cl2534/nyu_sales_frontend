const initialState = {
  loggedInUserID: 1,
  sale_posts: [],
  renderCategories: true,
  likes: null,
};

export default function reducer(state = initialState, action) {


  switch(action.type) {
    case 'GET_USER_ID':
      return {...state, loggedInUserID: action.payload}
    case 'GET_POSTS':
      return {...state, sale_posts: action.payload}
    default:
      return state;
  }
}
