import { useContextSelector } from "use-context-selector";
import { appContext } from "../context/AppProvider";

function usePopUp() {
  const popUp = useContextSelector(appContext, (v) => v.popUp);
  const callPopUp = useContextSelector(appContext, (v) => v.callPopUp);
  const closePopUp = useContextSelector(appContext, (v) => v.closePopUp);
  return { popUp, callPopUp, closePopUp };
};

export { usePopUp };