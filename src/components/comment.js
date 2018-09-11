import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: ''
    }
  }

  componentDidMount(props) {
    this.findUser(this.props.userID)
  }

  findUser = (user_id) => {
    fetch(`http://localhost:4000/api/v1/users/` + user_id)
    .then(res => res.json())
    .then(res => {console.log(res); this.setState({
      currentUser: res.user
    })})
  }


  render () {
    return (
    <div className={this.props.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={this.props.heading}>Comment from {this.state.currentUser.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>
              {this.props.comment}
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
    )}
}
