import { React, useState, useLayoutEffect } from "react";
import pochita1 from "./img/pochita1.gif";
import pochita2 from "./img/pochita2.png";
import fireworks from "./img/fireworks.gif";

export default function Page1() {
  console.log("render");
  const [pochitaState, setPochita] = useState(pochita2);
  const [text, setText] = useState("Гаффф:3");
  const pochitaAnim = () => {
    setTimeout(() => {
      setPochita(pochita1);
    }, 5000);
    setTimeout(() => {
      setText("Что же сегодня за день...?");
    }, 1200);
    setTimeout(() => {
      setText("Это же днюшка Настюшкиии!!!");
    }, 5000);
    setTimeout(() => {
      setText("Давай вместе выбирать подарок :3");
    }, 8200);
  };
  useLayoutEffect(() => {
    pochitaAnim();
  }, []);
  const Pochita = () => {
    if (pochitaState === pochita2) {
      return (
        <img
          src={pochitaState}
          className="absolute w-52 -bottom-20 left-28 animate-jump"
        />
      );
    } else {
      return <img src={pochitaState} className="absolute -bottom-8 left-5" />;
    }
  };
  return (
    <div className="relative w-sreen h-screen  overflow-hidden flex flex-col items-center pt-44">
      <img
        src={fireworks}
        className={
          text === "Давай вместе выбирать подарок :3"
            ? "absolute bottom-44 w-[1210px]"
            : "hidden"
        }
      />
      <button
        className={
          text === "Давай вместе выбирать подарок :3"
            ? "text-white px-10 text-2xl font-bold py-5 rounded-2xl hover:scale-110 active:scale-95 animate-pingo border-white border-4"
            : "hidden"
        }
      >
        <a href="#Present">Выбрать подарок</a>
      </button>
      <p className="bg-white mx-10 h-min mt-20  text-black px-5 text-center py-5 text-3xl font-bold rounded-3xl relative  after:content-[''] after:w-5 after:h-5  after:bg-white after:absolute after:rotate-45 after:-bottom-1 after:left-3">
        {text}
      </p>
      <Pochita />
    </div>
  );
}
