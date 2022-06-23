import "../styles/Calculadora.css";
import { Button } from "./Button";

export function Calculadora() {
  const numeros = [
    "AC",
    "+/-",
    "%",
    "/",
    7,
    8,
    9,
    ,
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
    "",
    ",",
    "=",
  ];

  return (
    <div className="corpo">
      <div className="visor">
        <strong>124586</strong>
      </div>
      <div className="buttons ">
        {numeros.map((numero) => {
          return (
            <Button
              active={
                numero === "/" ||
                numero === "x" ||
                numero === "-" ||
                numero === "+" ||
                numero === "="
              }
              data={numero}
            />
          );
        })}
      </div>
    </div>
  );
}
