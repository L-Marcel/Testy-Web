import { IconType } from "react-icons";
import { Styles } from "../../styles/styles";

function Button(props: Button.PButton) {
  const Icon = props.icon as IconType;
  return (
    <button className={Styles.button.content} 
    onClick={() => {
      if(!!props.onClick){
        props.onClick();
      };
    }}>
      { Icon && <Icon/> }{props.children}
    </button>
  );
};

function ButtonGroup(props: Button.PButtonGroup) {
  return (
    <div className={Styles.button.group}>
      {props.children}
    </div>
  );
};

export { Button, ButtonGroup };