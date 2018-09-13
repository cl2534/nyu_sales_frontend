import React, {Component} from 'react';
import User from './User';
import { Link } from 'react-router-dom';
import Image from 'react-image-resizer'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment'
import ShareIcon from '@material-ui/icons/Share';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UserBlurb from './UserBlurb'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Comments from './comment'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid'

const styles = (theme) => ({
  card: {
    maxWidth: 345,
    padding: 1,
    display: 'block',
    margin: '1 2px'
  },
  media: { // 16:9
    objectFit: 'cover',

  },
  actions: {
    display: 'flex'
  },
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }
});

class SalePost extends Component{

  state = {
    comment:'',
    sale_post_id: this.props.salepost.id,
    user_id: this.props.loggedInUserID
  }

  generateCategories = () => {
    if (this.props.renderCategories) {
      if (this.props.salepost.sale_categories.length == 0) {
        return null
      }
      else {
        let returnArray = []
        for (let category in this.props.salepost.sale_categories) {
          returnArray.push(<Link className="style-text" to={"/sale_categories/" + this.props.salepost.sale_categories[category].id}> <li>   {this.props.salepost.sale_categories[category].name} </li> </Link>)
        }
        return <ul className="right-list"> Categories:  {returnArray} </ul>
      }
    }
  }
  // t.text "comment"
  //     t.bigint "user_id"
  //     t.bigint "sale_post_id" //this.props.comments and loggedInUserID
  handleComment = (event) => {
    this.setState({
      comment : event.target.value
    })
  }

  handleSubmit = (event) => {
    fetch('http://localhost:4000/api/v1/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...this.state})
    }).then(res => res.json()).then(json => console.log(json))
  }

  generateComments = () => {
    const {classes} = this.props
    return this.props.salepost.comments.map(comment => {
      return (
        <Comments heading = {classes.heading} root = {classes.root} userID = {comment.user_id} comment = {comment.comment}/>
      )
    })
  }
  render() {
    const {classes} = this.props;
    return (
      <Grid item style = {{margin: "auto 8px"}}>
    <Card className={classes.card}>
      <UserBlurb postuser = {this.props.salepost.user} avatar = {classes.avatar} postID = {this.props.salepost.id}/>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          table align = 'center'
        />
        <Image
           src= {this.props.salepost.picture_url}
           height={ 300 }
           width={ 300 }
         />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.salepost.name}
          </Typography>
          <div className="meta">
            <span className="price"> {this.props.salepost.price}</span>
            <br />
            <span className="category">  </span>
          </div>
          <Typography component="p">
            {this.generateCategories()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <FavoriteIcon />
        </Button>
        <Button size="small" color="primary">
          <CommentIcon />
        </Button>
      </CardActions>
      <div className="comment-main-level">
        <div className="comment-box">
          {this.generateComments()}
        </div>
      </div>
      <form onSubmit={this.handleSubmit}>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        value = {this.state.comments}
        onChange = {this.handleComment}
        InputProps={{
          startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>)}}/>
    </form>
    </Card>
    </Grid>
  );
  }
}
function mapStateToProps(state) {
  return {
    loggedInUserID: state.reducer.loggedInUserID,
    comments: state.reducer.comments,
    likes: state.reducer.likes
  }
}
export default connect(mapStateToProps)(withStyles(styles)(SalePost));


//#this.props.id

// function mapStateToProps(state) {
//   return {
//     posts: state.sale_posts,
//     renderCategories: state.renderCategories
//   }
// }
//
// export default connect(mapStateToProps)(SalePost);
