import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const Publications = (props) => {
  console.log(props);
  const { key } = useParams();
  return <div>{key}</div>;
};

const mapStateToProps = ({ user }) => {
  return {
    users: user.users,
  };
};

export default connect(mapStateToProps, null)(Publications);
