/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  getUserPublication,
  openClosePublications,
} from '../redux/publications/publicationActions';

const Publications = (props) => {
  const { getUserPublication, publication } = props;
  const { key } = useParams();

  useEffect(() => {
    getUserPublication(key);
  }, []);

  const handleClick = (key, commentId) => {
    props.openClosePublications(key, commentId);
  };

  const userPublications = () => {
    if (publication.loading) {
      return <p>Loading...</p>;
    }
    if (publication.userPublications) {
      return publication.userPublications.map((item, commentId) => {
        return (
          <div
            key={item.id}
            onClick={() => handleClick(key, commentId)}
            role='button'
            tabIndex={0}
            id={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <h1>Publicaciones del usuario</h1>
      {userPublications()}
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
