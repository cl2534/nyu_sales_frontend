render() {
  const { classes } = this.props;
  const { anchorEl } = this.state;
  return (
  <Grid item style = {{margin: "auto 8px"}}>
  <Card className={classes.card}>
    {this.renderAvatar()}
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
