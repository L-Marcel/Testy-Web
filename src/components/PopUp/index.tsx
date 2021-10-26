import { useEffect, useState } from "react";
import { usePopUp } from "../../hook/usePopUp";
import { Styles } from "../../styles/styles";
import { GrClose } from "react-icons/gr";

function PopUp() {
  const { popUp, closePopUp } = usePopUp();
  const [timeToClose, setTimeToClose] = useState<number>(popUp.timeToClose);

  useEffect(() => {
    setTimeToClose(popUp.timeToClose);
  }, [popUp.timeToClose]);

  useEffect(() => {
    if(timeToClose > 0){
      let interval = setInterval(() => {
        setTimeToClose(timeToClose => (timeToClose - 1000));
      }, 1000);

      return () => clearInterval(interval);
    } else if(timeToClose < 0) {
      setTimeToClose(0);
    };
  }, [timeToClose]);

  let percent = ((timeToClose)/(popUp.timeToClose)) * 100;

  return (
    <div className={popUp.isOpen? Styles.popUp.open:Styles.popUp.close}>
      <h1>{popUp.text}</h1>
      <GrClose onClick={closePopUp}/>
      <div className={Styles.popUp.barContainer}>
        <div className={Styles.popUp.bar} style={{ 
          width: `${percent+1}%`,
          borderBottomRightRadius: percent < 100? "0px":"10px"
        }}/>
      </div>
    </div>
  );
};

export { PopUp };