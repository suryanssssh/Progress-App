import React from "react";
import "../style.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import CoinForm from "./CoinForm";
import "../style.css";
const InputCoin = (props) => {
  return (
    <div>
      <Popup
        trigger={
          <button
            className="button"
            style={{ "background-color": props.color }}
          >
            {props.coinType}
          </button>
        }
        modal
        position="right center"
      >
        {(close) => <CoinForm />}
      </Popup>
    </div>
  );
};

export default InputCoin;
