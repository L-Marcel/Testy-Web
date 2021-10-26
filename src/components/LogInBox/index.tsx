import { VscGithubInverted } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import { CgPassword } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { Button, ButtonGroup } from "../Button";
import { FormEvent, useState } from "react";
import { Input } from "../Input";
import { Styles } from "../../styles/styles";
import { Firebase } from "../../service/firebase/firebaseApp";
import { usePopUp } from "../../hook/usePopUp"

import logo from "../../assets/Testy.png";

function LogInBox() {
  const { callPopUp } = usePopUp();
  const [credentials, setCredentials] = useState<User.LoginCredentials>({
    email: "",
    password: ""
  });

  function onChangeCredentials(value: any, name: string) {
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  async function logInWithFirebase(data: Login.Response, provider: string) {
    if(data.status === "failure"){
      switch(data.error.code) {
        case "auth/account-exists-with-different-credential":
          callPopUp("E-mail já associado uma conta de outro provedor.", 10000);
          break;
        default:
          break;
      };
      return false;
    };
  
  
    return data.token;
  };

  function onSubmitForm(e: FormEvent) {
    e.preventDefault();
  };

  return (
    <form className={Styles.logInBox.form} onSubmit={onSubmitForm}>
      <img className={Styles.logInBox.logo} src={logo} alt="logo"/>
      <div>
        <Input placeholder="E-mail" name="email" onChange={onChangeCredentials} type="text" value={credentials.email} icon={<HiOutlineMail/>}/>
        <Input placeholder="Senha" name="password" onChange={onChangeCredentials} type="password" value={credentials.password} icon={<CgPassword/>}/>
        <ButtonGroup>
          <Button>Entrar</Button>
          <Button>Registrar</Button>
        </ButtonGroup>
        <div className={Styles.button.signInGroup}>
          <Button icon={FcGoogle} onClick={async() => {
            let data = await Firebase.google();
            logInWithFirebase(data, "google");
          }}>Entrar com o Google</Button>
          <Button icon={VscGithubInverted} onClick={async() => {
            let data = await Firebase.github();
            logInWithFirebase(data, "github");
          }}>Entrar com o Github</Button>
        </div>
      </div>
    </form>
  );
};

export { LogInBox };