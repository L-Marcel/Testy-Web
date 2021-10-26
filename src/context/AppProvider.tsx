import { useCallback, useState } from "react";
import { createContext } from "use-context-selector";

const appContext = createContext({} as App.Context);

function AppProvider(props: App.Provider) {
  const [user, setUser] = useState<User.Info | null>(null);

  const _setUser = useCallback((user: User.Info | null) => {
    setUser(user);
  }, [setUser]);

  return (
    <appContext.Provider value={{
      user,
      setUser: _setUser
    }}>
      {props.children}
    </appContext.Provider>
  );
};

export { AppProvider, appContext };