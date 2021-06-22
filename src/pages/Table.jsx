import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Table = ({ users, fetching, error }) => {
  if (fetching) {
    return <h2>Loading..</h2>;
  }
  if (error) {
    return <h2>Ocurrió un error</h2>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
          <th>Id</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>
              <Link to={`/publications/${user.id}`}>
                <div className='eye-solid icon' />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    users: user.users,
    fetching: user.fetching,
    error: user.error,
  };
};

export default connect(mapStateToProps, null)(Table);
