import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PopUp } from "./components/PopUp";
import { Login } from "./pages/Login";

function Routes() {
  return (
    <BrowserRouter>
      <PopUp/>
      <Switch>
        <Route path="/" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };