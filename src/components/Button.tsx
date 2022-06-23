import React from "react";
interface Props {
  data: (number | string | undefined)[];
  active: boolean;
}
export function Button({ data, active }: Props) {
  return (
    <div>
      <button className={active ? "color" : "gray"}>{data}</button>
    </div>
  );
}
