import { Routes } from "./Routes";
import { Firebase } from "./service/firebase/firebaseApp";


function App() {
  Firebase.execute();
  
  return (
    <Routes/>
  );
};

export { App };