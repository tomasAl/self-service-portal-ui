import React from "react";
import useLocalStorage from '../hooks/useLocalStorage';
import { USER_LOCAL_STORAGE_KEY } from "../const/user";
import { USER_MOCK } from "../const/user";
import { User } from "../utils/user";

export const UserContext = React.createContext<{ user: User }>({
  user: undefined,
});

function UserProvider({children}) {
  const [user, setUser] = useLocalStorage<User | undefined>(USER_LOCAL_STORAGE_KEY, undefined);

  React.useEffect(() => {
    setUser(USER_MOCK);
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
