import { useEffect } from 'react';
import api from '../../Api';
import { useStore } from '../../Store';

const ListUsers = () => {
  const store = useStore();

  useEffect(() => {
    api.user.getAll().then((res) => {
      store.setUsers(res.data);
      store.newResponse(res);
    });
  }, []);

  return (
    <div>
      <h4>All Users</h4>
      <div style={{ height: '50vh', color: 'red' }} className="bg-light border">
        <pre>{JSON.stringify(store.users, undefined, 2)}</pre>
      </div>
    </div>
  )
}

export default ListUsers;
