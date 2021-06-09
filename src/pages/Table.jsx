import React from 'react';
import { connect } from 'react-redux';

const Table = ({ users, fetching, error }) => {
  const insertRows = () => {
    console.log(users);
    {
      users ? (
        users.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          );
        })
      ) : (
        <></>
      );
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>{insertRows()}</tbody>
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
