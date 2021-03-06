import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-image-resizer'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import {connect} from 'react-redux'

import UserBlurb from './UserBlurb'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Comments from './comment'


const styles = theme => ({
  card: {
    width: 320
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "chocolate"
  },
  "@media (min-width: 600px)": {
    card: {
      width: 600
    }
  }
});

class SalePost extends Component{

  state = {
    comment:'',
    sale_post_id: this.props.salepost.id,
    user_id: this.props.loggedInUserID,
    expanded: false,
    anchorEl: null,
    currentUser: ''
  }

  generateCategories = () => {
        let returnArray = []
        for (let category in this.props.salepost.sale_categories) {
          returnArray.push(<Link className="style-text" to={"/sale_categories/" + this.props.salepost.sale_categories[category].id}> <li>   {this.props.salepost.sale_categories[category].name} </li> </Link>)
        }
        return <ul className="right-list"> Categories:  {returnArray} </ul>
  }
  handleExpandClick = () => {
    this.setState(state => ({ expanded:     !state.expanded }));
  };

  handleCommentClick = () => {
    this.props.openCommentDialogAction(this.props._id);
  };

  handleOpenPostMenu = e => {
    e.stopPropagation();
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClosePostMenu = e => {
    this.setState({ anchorEl: null });
  };
  // t.text "comment"
  //     t.bigint "user_id"
  //     t.bigint "sale_post_id" //this.props.comments and loggedInUserID


  handleComment = (event) => {
    this.setState({
      comment : event.target.value
    })
  }


  renderComments = () => {
    return this.props.comments.map(comment => {
      return (
        <Typography key={comment._id}>
          <strong>{comment.userName}: </strong>
          {comment.content}
        </Typography>
      );
    });
  };
  handleCardArea = e => {
    console.log("card area");
  };
  commentSubmit = (event) => {
    fetch('http://localhost:4000/api/v1/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...this.state})
    }).then(res => res.json()).then(json => console.log(json))
  }

  generateComments = () => {
    const {classes} = this.props;
    return this.props.salepost.comments.map(comment => {
      return (

        <Comments heading = {classes.heading} root = {classes.root} userID = {comment.user_id} comment = {comment.comment}/>
      )
    })
    }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    console.log(this.props.salepost.comments)
    return (

      <React.Fragment>
  <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={this.handleClosePostMenu}
  >
    <MenuItem onClick={this.handleDeletePost}>Delete Post</MenuItem>
    <MenuItem onClick={this.handleAddFriend}>Add Friend</MenuItem>
    {/* <MenuItem onClick={this.handleFollowPost}>Follow Post</MenuItem> */}
  </Menu>
  <Card className={classes.card}>
    <CardActionArea
      className={classes.card}
      onClick={this.handleCardArea}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="Post" className={classes.avatar}>
            {this.props.salepost.user.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon
              aria-owns={anchorEl ? "simple-menu" : null}
              aria-haspopup="true"
              onClick={this.handleOpenPostMenu}
            />
          </IconButton>
        }
        title= {this.props.salepost.name}
        subheader = {this.props.salepost.price}
      />
      {this.props.salepost.picture_url ? (
        <CardMedia
          className={classes.media}
          image={this.props.salepost.picture_url}
        />
      ) : null}
    </CardActionArea>
    <CardActions className={classes.actions} disableActionSpacing>
      Posted By: {this.props.salepost.user.name}
      <IconButton
        className={classnames(classes.expand, {
          [classes.expandOpen]: this.state.expanded
        })}
        onClick={this.handleExpandClick}
        aria-expanded={this.state.expanded}
        aria-label="Show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph variant="body2">
          {this.props.salepost.comments ? this.props.salepost.comments.length : 0} Comments
        </Typography>
        {this.generateComments()}
        <br/>
        <Form reply onSubmit = {this.commentSubmit}>
          <Form.TextArea value = {this.state.comments} onChange = {this.handleComment}/>
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>


      </CardContent>
    </Collapse>
  </Card>
</React.Fragment>
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
