import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPostComments } from '../redux/publications/publicationActions';

const Comments = (props) => {
  const { getPostComments, postId, comments } = props;
  useEffect(() => {
    getPostComments(postId);
  }, []);
  return (
    <div>
      {comments ? (
        comments.map((item) => {
          return <div>{item.body}</div>;
        })
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

const mapStateToProps = ({ publication }) => {
  return {
    comments: publication.postComments,
  };
};

const mapDispatchtoProps = {
  getPostComments,
};

export default connect(mapStateToProps, mapDispatchtoProps)(Comments);
