/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserPublication } from '../redux/publications/publicationActions';

const Publications = (props) => {
  const { getUserPublication, publication } = props;
  const { key } = useParams();

  useEffect(() => {
    getUserPublication(key);
  }, []);

  const userPublications = () => {
    if (publication.loading) {
      return <p>Loading...</p>;
    }
    if (publication.userPublications) {
      return publication.userPublications.map((item) => {
        return (
          <div key={item.id}>
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
};

export default connect(mapStateToProps, mapDispatchtoProps)(Publications);
