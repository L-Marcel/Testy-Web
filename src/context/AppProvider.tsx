import { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

const appContext = createContext({} as App.Context);

function AppProvider(props: App.Provider) {
  const [user, setUser] = useState<User.Info | null>(null);
  const [popUp, setPopUp] = useState<PopUp.PPopUp>({
    isOpen: false,
    text: "",
    timeToClose: 0
  });

  const _setUser = useCallback((user: User.Info | null) => {
    setUser(user);
  }, [setUser]);

  const _callPopUp = useCallback((text: string, timeToClose?:number) => {
    setPopUp({
      isOpen: true,
      text,
      timeToClose: timeToClose? timeToClose:8000
    });
  }, [setPopUp]);

  const _closePopUp = useCallback(() => {
    setPopUp({
      isOpen: false,
      text: "",
      timeToClose: 0
    });
  }, [setPopUp]);

  useEffect(() => {
    if(popUp.isOpen){
      let interval = setInterval(() => {
        _closePopUp();
      }, popUp.timeToClose + 1000);

      return () => clearInterval(interval);
    };
  }, [popUp, _closePopUp]);

  return (
    <appContext.Provider value={{
      user,
      setUser: _setUser,
      popUp,
      callPopUp: _callPopUp,
      closePopUp: _closePopUp
    }}>
      {props.children}
    </appContext.Provider>
  );
};

export { AppProvider, appContext };