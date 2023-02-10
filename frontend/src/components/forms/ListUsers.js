import { useState, useEffect } from 'react';
import api from '../../api';

const ListUsers = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    api.user.getAll().then((users) => {
      setUsers(JSON.stringify(users, undefined, 2))
    });
  }, []);

  return (
    <div>
      <h4>All Users</h4>
      <div style={{ height: '50vh' }} className="bg-light border">{users}</div>
    </div>
  )
}

export default ListUsers;
