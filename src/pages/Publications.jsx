import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPublications } from '../redux/publications/publicationActions';

const Publications = (props) => {
  const { getPublications } = props;
  const { key } = useParams();

  useEffect(() => {
    getPublications();
  }, []);

  console.log(props);
  return <div>{key}</div>;
};

const mapStateToProps = ({ user, publication }) => {
  return {
    users: user.users,
    publication: publication.publications,
  };
};

const mapDispatchtoProps = {
  getPublications,
};

export default connect(mapStateToProps, mapDispatchtoProps)(Publications);
