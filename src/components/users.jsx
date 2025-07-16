import API from '../api';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => userId !== user._id));
  };
  const renderPhrase = () => {};
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Имя</th>
            <th scope='col'>Качества</th>
            <th scope='col'>Профессия</th>
            <th scope='col'>Встретился,раз</th>
            <th scope='col'>Оценка</th>
            <th scope='col'> </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((qualitie) => (
                  <span
                    className={'badge m-2 bg-' + qualitie.color}
                    key={qualitie._id}
                  >
                    {qualitie.name}
                  </span>
                ))}
              </td>
              <td key={user.profession._id}>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
