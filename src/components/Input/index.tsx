import { ChangeEvent } from "react";
import { Styles } from "../../styles/styles";

function Input(props: Input.PInput) {
  function changeEvent(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    props.onChange(value, props.name);
  };

  return (
    <div className={Styles.input.box}>
      <div className={Styles.input.icon}>
        {props.icon}
      </div>
      <input type={props.type} value={props.value} onChange={changeEvent} placeholder={props.placeholder}/>
    </div>
  );
};

export { Input };