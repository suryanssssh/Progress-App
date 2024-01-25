import React from "react";
import "../style.css";

import CoinForm from "./CoinForm";
import "../style.css";
const InputCoin = (props) => {
  return (
    <div className="h-screen flex flex-col items-center gap-6 ">
      <button className="button" style={{ "background-color": props.color }}>
        {props.coinType}
      </button>
      <CoinForm />
    </div>
  );
};

export default InputCoin;
