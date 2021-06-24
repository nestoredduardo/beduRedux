/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  getUserPublication,
  openClosePublications,
} from '../redux/publications/publicationActions';
import Comments from '../components/Comments';

const Publications = ({
  getUserPublication,
  publication,
  openClosePublications,
}) => {
  const { userPublications } = publication;
  const { key } = useParams();

  useEffect(() => {
    getUserPublication(key);
  }, []);

  const handleClick = (key, commentId) => {
    openClosePublications(key, commentId);
  };

  const showUserPublications = () => {
    if (publication.loading) {
      return <p>Loading...</p>;
    }
    if (userPublications) {
      return userPublications.map((item, commentId) => {
        return (
          <div
            key={item.id}
            onClick={() => handleClick(key, commentId)}
            role='button'
            tabIndex={0}
            id={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            {item.open && <Comments postId={item.id} />}
          </div>
        );
      });
    }
  };

  return (
    <div>
      <h1>Publicaciones del usuario</h1>
      {showUserPublications()}
    </div>
  );
};

const mapStateToProps = ({ user, publication }) => {
  return {
    users: user.users,
    publication,
  };
};

const mapDispatchtoProps = {
  getUserPublication,
  openClosePublications,
};

export default connect(mapStateToProps, mapDispatchtoProps)(Publications);
