import React from "react";
import type { TSimbolo } from "./Calculadora";
interface Props {
  data: TSimbolo;
  active: boolean;
  largo?: boolean;
  gray: boolean;

  funcao: () => void;
}

export function Button({
  data,
  active,
  largo,
  gray,

  funcao,
}: Props) {
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (funcao != null) {
      funcao();
    }

    // if (simbolo === "AC" && AC != null) {
    //   AC();
    // }
    // if (simbolo === "+/-" && maisMenos != null) {
    //   maisMenos();
    // }
  };
  return (
    <div>
      <button
        onClick={clickHandler}
        className={`${active ? "color" : "darkGray"} ${gray ? "gray" : ""} ${
          largo != null && largo ? " buttonLargo" : ""
        }`}
        value={data}
      >
        {data}
      </button>
    </div>
  );
}
