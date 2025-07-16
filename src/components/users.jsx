import API from '../api';
import { useState } from 'react';

const Users = () => {
  console.log(API.users.fetchAll());
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = () => {};
  const renderPhrase = () => {};
  return <h1>Users</h1>;
};

export default Users;
