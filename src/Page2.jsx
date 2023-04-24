import { React, useState, useRef } from "react";
import wheel from "./img/wheel.png";
import arrow from "./img/arrow.png";
import levi from "./img/levi.png";
import horse from "./img/horse.jpg";
import fireworks from "./img/fireworks.gif";
import pochita2 from "./img/pochita2.gif";

export default function Page1() {
  const wheelRef = useRef(null);
  const [wheelState, setWheel] = useState("");
  const [pageState, setPage] = useState(false);
  const [twerkPochita, setTwerk] = useState(false);
  const spinHandler = () => {
    setWheel("animate-spin");
    setTimeout(() => {
      setPage(true);
    }, 5000);
  };
  const PageContent = () => {
    if (pageState === false) {
      return (
        <div
          className="relative w-sreen h-screen overflow-hidden flex flex-col justify-center items-center"
          id="Present"
        >
          <img src={arrow} className="w-20" />
          <img src={wheel} ref={wheelRef} className={wheelState} />
          <button
            className="animate-pingo text-white text-3xl border-white border-4 font-bold px-10 py-5 rounded-3xl hover:scale-110 active:scale-95"
            onClick={spinHandler}
          >
            Крутануть
          </button>
        </div>
      );
    } else if (twerkPochita === false) {
      setTimeout(() => {
        setTwerk(true);
      }, 20000);
      return (
        <div className="w-screen h-screen flex flex-col items-center justify-center relative py-10">
          <h1 className="text-white font-bold text-2xl mb-10 bg-pink-400 px-1 py-5 rounded-xl ">
            НААААА КОНЯЯЯЯ!!!!!
          </h1>
          <img src={levi} className="z-10 w-60 " />
          <img src={horse} className="border-white w-64 border-4 mb-2" />
          <p className="text-white font-bold text-2xl mx-5 text-center">
            Настюша выигрла конную прогулку 23.04 в 14:00
          </p>
          <img src={fireworks} className="absolute" />
        </div>
      );
    } else {
      return (
        <div className="w-screen h-screen flex flex-col items-center justify-center relative py-10 bg-[#FBFBFB]">
          <h1 className="text-2xl font-bold">С твоим днем, любимка ❤️</h1>
          <img src={pochita2} className="w-full" />
        </div>
      );
    }
  };
  return <PageContent />;
}
