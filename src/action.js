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

export function addComment(user_id, comment) {
  return (dispatch) => {
    fetch('http://localhost:4000/api/v1/sale_posts')
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

function addCommentAction(comment) {
  return {type: 'ADD_COMMENT', payload: comment}
}

export function getUserIDAction(id) {
  return { type: 'GET_USER_ID', payload: id}
}

export function getPostsAction(sale_posts) {
  return { type: 'GET_POSTS', payload: sale_posts}
}
