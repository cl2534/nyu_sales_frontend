export function LikeButtonAction(id, likes) {
  return (dispatch) => {
    fetch('https://young-waters-32129.herokuapp.com/api/v1/posts/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({likes: likes + 1})
    }).then(res => res.json()).then(json => {
        console.log(json)
        debugger;
       dispatch(LikeClick(json.likes))
     })
   }
 }

 
// handleLikeClick = () => {
//   fetch('https://young-waters-32129.herokuapp.com/api/v1/posts/' + this.props.post.id, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type':'application/json'
//     },
//     body: JSON.stringify({likes: this.props.post.likes + 1})
//   }).then(res => res.json()).then(json => this.setState({
//     likes: this.props.post.likes++,
//     likedAlready: true
//   }))
// }
function LikeClick (likes) {
  return {type: 'INCREMENT_LIKE', payload: likes}
}

export function incrementAction() {
  return { type: 'INCREMENT' };
}

export function incrementCountererAction() {
  return { type: 'INCREMENT_OTHER_COUNTER' };
}

export function setAction(value) {
  return { type: 'SET_COUNTER', payload: value };
}

export function getUserIDAction(id) {
  return { type: 'GET_USER_ID', payload: id}
}

export function getPostsAction(sale_posts) {
  return { type: 'GET_POSTS', payload: sale_posts}
}
