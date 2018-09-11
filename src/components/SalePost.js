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


  generateCategories = () => {
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

  handleComment = () => {
    
  }

  generateComments = () => {
    const {classes} = this.props
    return this.props.salepost.comments.map(comment => {
      return (
        <Comments heading = {classes.heading} root = {classes.root} userID = {comment.user_id} comment = {comment.comment} />
      )
    })
  }
  render() {
    const {classes} = this.props;
    return (

    <Card className={classes.card}>
      <UserBlurb postuser = {this.props.salepost.user} avatar = {classes.avatar}/>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          table align = 'center'
          image= {this.props.salepost.picture_url}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.salepost.name}
          </Typography>
          <div className="meta">
            <span className="price">$200</span>
            <span className="category">  {this.generateCategories()} </span>
          </div>
          <Typography component="p">
            For Sale
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
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        onChange = {this.handleComment()}

        InputProps={{
          startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>)}}/>
    </Card>
  );
  }
}
function mapStateToProps(state) {
  return {
    loggedInUserID: state.reducer.loggedInUserID
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
