import { createContext, useContext, useState } from 'react';

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [response, setResponse] = useState();
  const [allUsers, setallUsers] = useState();

  const store = {
    response: response,
    newResponse: (_response) => { setResponse(_response) },
    users: allUsers,
    setUsers: (_users) => setallUsers(_users)
  };

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  return useContext(StoreContext);
}

export default StoreProvider;

