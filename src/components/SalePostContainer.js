import React, {Component} from 'react';
import {connect} from 'react-redux'
import SalePost from './SalePost'
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 50
  }
});


class SalePostContainer extends Component {
  renderPosts = () => {
    if (!!this.props.renderCategories) {
      return this.props.saleposts.map(salepost => {
        return (
        <Grid item key={salepost._id}>
            <SalePost salepost={salepost} key={salepost.id} renderCategories={this.props.renderCategories}/>
        </Grid>
          )}
      )
    } else {
      return this.props.categoryposts.map(salepost => {
        return (
          <SalePost salepost={salepost} key={salepost.id} renderCategories={this.props.renderCategories}/>
        )}
      )
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={0}>
          <Grid
            container
            spacing={24}
            justify="space-evenly"
            alignItems="center"
            direction="column-reverse"
            >
            {this.renderPosts()}
          </Grid>
        </Paper>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  saleposts: state.reducer.sale_posts,
})


export default connect(mapStateToProps)(withStyles(styles)(SalePostContainer));
