import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = state => {
  return {
    posts: state.post.posts || [],
    isFetching: state.post.isFetching,
    router: state.router,
  };
};

const Blog = connect(mapStateToProps)(App);

export default Blog;
