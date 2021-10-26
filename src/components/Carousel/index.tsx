import { useEffect, useState } from "react";
import { Styles } from "../../styles/styles";

function Carousel(props: Carousel.PCarousel) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if((index+1) < props.data.length) {
        setIndex(index+1);
      } else {
        setIndex(0);
      };
    }, 15000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={Styles.carousel.container}>
      {
        props.data.map((item, i) => {
          return (
            <Item key={`carousel-${i}`} selected={i === index} data={item}/>
          );
        })
      }
      <div></div>
    </div>
  );
};

function Item(props: Carousel.PItem) {
  const item = props.data;

  return (
    <div className={`${Styles.carousel.item} ${props.selected? Styles.carousel.selected:""}`}>
      <img className={Styles.carousel.image} src={item.img}/>
      <h1 className={Styles.carousel.title}>
        {item.title}
      </h1>
      <h2 className={Styles.carousel.subtitle}>
        {item.subtitle}
      </h2>
      <p className={Styles.carousel.description}>
        {item.description}
      </p>
    </div>
  );
};

export { Carousel };