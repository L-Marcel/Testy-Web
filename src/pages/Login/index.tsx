import { Styles } from "../../styles/styles";
import { Carousel } from "../../components/Carousel";

import checklistImg from "../../assets/Checklist.svg";
import designerImg from "../../assets/Designer.svg";
import marketingImg from "../../assets/Marketing.svg";
import winnersImg from "../../assets/Winners.svg";
import { LogInBox } from "../../components/LogInBox";

const items: Carousel.IItem[] = [
  {
    title: "Construa",
    subtitle: "Testes e desafios",
    description: "Faça do zero formulários incríveis e com uma grande variedade de tipos de questões, atribua pontos, tempo para cada questão e até mesmo descubra colas...",
    img: designerImg
  },
  {
    title: "Avalie",
    subtitle: "Do seu jeito",
    description: "Feito para todos os casos! Com o Testy você pode realizar avaliação manual das respostas dos usuários de maneira rápida e prática...",
    img: checklistImg
  },
  {
    title: "Desafie",
    subtitle: "Quantos conseguir",
    description: "O sistema de pontos pode tornar tudo uma grande competição! Basta ativar a pontuação por tempo de resposta para isso.",
    img: marketingImg
  },
  {
    title: "Conquiste",
    subtitle: "A maior pontuação",
    description: "Junte-se aos seus amigos e os supere até quantas vezes for capaz! Se divertir também faz parte do processo.",
    img: winnersImg
  },
];

function Login() {
  return (
    <main className={Styles.app.content}>
      <div className={Styles.app.box}>
        <LogInBox/>
      </div>
      <div className={Styles.app.body}>
        <Carousel data={items}/>
      </div>
    </main>
  );
};

export { Login };