import React from "react";
import "../style.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
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
        position="right center"
      >
        <div>Popup content here !!</div>
      </Popup>
    </div>
  );
};

export default InputCoin;