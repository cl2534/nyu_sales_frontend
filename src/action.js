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

       dispatch(LikeClick(json.likes))
     })
   }
 }

export function addComment(user_id, sale_post_id, comment) {
  return (dispatch) => {
    fetch(`http://localhost:4000/api/v1/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: comment,
        user_id: user_id,
        sale_post_id: sale_post_id
      })
    }).then(res => res.json())
    .then(res => dispatch(addCommentAction(json.comment)))
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

export function getCategoryAction(sale_categories) {
  return { type: 'GET_CATEGORIES', payload: sale_categories}
}
