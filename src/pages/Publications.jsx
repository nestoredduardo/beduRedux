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

  console.log(props);

  return (
    <div>
      <h1>{`Publicaciones del usuario ${key}`}</h1>
      {publication ? (
        publication.userPublications.map((item) => {
          return <p>{item.title}</p>;
        })
      ) : (
        <p>Nothing</p>
      )}
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
