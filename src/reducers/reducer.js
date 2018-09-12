const initialState = {
  loggedInUserID: 1,
  sale_posts: [],
  renderCategories: true,
  likes: null,
  avatarID: 1,
  comments: '',
  sale_categories: []
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
      return {...state, comments: action.payload}
    case 'ADD_LIKES':
      return {...state, likes: action.payload}
    case 'GET_CATEGORIES':
      return {...state, sale_categories: action.payload}
    default:
      return state;

  }
}
