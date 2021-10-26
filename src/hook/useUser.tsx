import { useContextSelector } from "use-context-selector";
import { appContext } from "../context/AppProvider";

function useUser() {
  const user = useContextSelector(appContext, (v) => v.user);
  const setUser = useContextSelector(appContext, (v) => v.setUser);

  return [user, setUser];
};

export { useUser };