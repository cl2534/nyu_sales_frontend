const initialState = {
  loggedInUserID: 1,
  sale_posts: [],
  renderCategories: true,
  likes: null,
  avatarID: 1,
  comment: ''
};

export default (state = initialState, action) => {


  switch(action.type) {
    case 'GET_USER_ID':
      return {...state, loggedInUserID: action.payload}
    case 'GET_POSTS':
      return {...state, sale_posts: action.payload}
    case 'FETCH_USER':
      return {...state, avatarID: action.payload}
    case 'ADD_COMMENT':
      return {...state, comment: action.payload}
    default:
      return state;

  }
}
