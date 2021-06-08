import React from 'react';

const Table = ({ users }) => {
  const insertRows = () => {
    users.map((user) => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
        </tr>
      );
    });
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

export default Table;
