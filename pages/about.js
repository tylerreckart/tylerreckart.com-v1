import React from 'react';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled from 'styled-components';

// Components
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Post from '../src/components/Post';

const QUERY = gql`
  query {
    postById(id: $pageId: Int!) {
      title
      created
      content
    }
  }
`;

const Rect = styled.div`
  margin: 0 auto;
  width: 650px;
`;

const Page = (props) => {
  let node;
  if (props.data.postById) {
    node = (
      <Rect>
        <Post
          content={props.data.postById.content}
          summary={false}
          title={props.data.postById.title}
        />
      </Rect>
    );
  }

  return (
    <div>
      <Header {...props} />
        {node}
      <Footer />
    </div>
  );
};

export default graphql(QUERY, {
  options: ({ pageId }) => ({ variables: { pageId } }),
})(Page);
