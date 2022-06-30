import "../styles/Calculadora.css";
import { Button } from "./Button";
import { useState } from "react";

export type TSimbolo = number | string;
const simbolos = [
  "AC",
  "+/-",
  "%",
  "/",
  7,
  8,
  9,
  "x",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  "0",
  ",",
  "=",
] as TSimbolo[];

export function Calculadora() {
  const [oldResultado, setOldResultado] = useState<any | string | number>(0);
  const [resultado, setResultado] = useState<any | string | number>(0);
  const [operador, setOperador] = useState<any | string>("");
  const funcoesSimbolos: { [id: string]: () => void } = {
    AC: () => {
      setResultado(0);
      setOldResultado(0);
    },
    "+/-": () => {
      setResultado(-resultado);
    },
    "%": () => {
      setResultado(resultado / 100);
    },
    "/": () => {
      setOperador("/");
      setOldResultado(resultado);
      setResultado(0);
    },
    x: () => {
      setOperador("x");
      setOldResultado(resultado);
      setResultado(0);
    },
    "-": () => {
      setOperador("-");
      setOldResultado(resultado);
      setResultado(0);
    },
    "+": () => {
      setOperador("+");
      setOldResultado(resultado);
      setResultado(0);
    },
    "=": () => {
      if (operador === "/") {
        setResultado(oldResultado / resultado);
      } else if (operador === "x") {
        setResultado(oldResultado * resultado);
      } else if (operador === "-") {
        setResultado(oldResultado - resultado);
      } else if (operador === "+") {
        setResultado(parseFloat(oldResultado) + parseFloat(resultado));
      }
    },
    ",": () => {
      console.log(",");
    },
    "0": () => {
      if (resultado === 0) {
        setResultado(0);
      } else {
        setResultado(resultado + "0");
      }
    },
    "1": () => {
      if (resultado === 0) {
        setResultado(1);
      } else {
        setResultado(resultado + "1");
      }
    },
    "2": () => {
      if (resultado === 0) {
        setResultado(2);
      } else {
        setResultado(resultado + "2");
      }
    },
    "3": () => {
      if (resultado === 0) {
        setResultado(3);
      } else {
        setResultado(resultado + "3");
      }
    },
    "4": () => {
      if (resultado === 0) {
        setResultado(4);
      } else {
        setResultado(resultado + "4");
      }
    },
    "5": () => {
      if (resultado === 0) {
        setResultado(5);
      } else {
        setResultado(resultado + "5");
      }
    },
    "6": () => {
      if (resultado === 0) {
        setResultado(6);
      } else {
        setResultado(resultado + "6");
      }
    },
    "7": () => {
      if (resultado === 0) {
        setResultado(7);
      } else {
        setResultado(resultado + "7");
      }
    },
    "8": () => {
      if (resultado === 0) {
        setResultado(8);
      } else {
        setResultado(resultado + "8");
      }
    },
    "9": () => {
      if (resultado === 0) {
        setResultado(9);
      } else {
        setResultado(resultado + "9");
      }
    },
  };

  return (
    <div className="corpo">
      <div className="visor">
        <strong>{resultado}</strong>
      </div>
      <div className="buttons ">
        {simbolos.map((simbolo) => {
          return (
            <Button
              key={simbolo}
              funcao={funcoesSimbolos[simbolo]}
              active={
                simbolo === "/" ||
                simbolo === "x" ||
                simbolo === "-" ||
                simbolo === "+" ||
                simbolo === "="
              }
              gray={simbolo === "AC" || simbolo === "+/-" || simbolo === "%"}
              largo={simbolo === "0"}
              data={simbolo}
            />
          );
        })}
      </div>
    </div>
  );
}
