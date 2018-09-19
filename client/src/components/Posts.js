import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../reducers/posts';
import { Container, Grid, Header, Feed, Icon } from 'semantic-ui-react';

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  posts = () => {
    return this.props.posts.map( post =>
      <Feed.Event>
      <Feed.Label image='/images/avatar/small/joe.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>{ post.name }</a> posted on his page
          <Feed.Date>{ new Date(post.created_at).toLocaleTimeString() }</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          { post.body }
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            {Math.floor(Math.random() * 100)} Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
          { this.posts() }
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { posts: state.posts }
  }

export default connect(mapStateToProps)(Posts);