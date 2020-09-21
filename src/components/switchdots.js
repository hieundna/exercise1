import React, { useState } from 'react';
import "../css/switch.css";
import "../css/slider.css";
import "../css/body-widgets.css";

function SwitchDot(props) {
	return(
        <div className={"switch switch-slider"  + (props.onSwitch ? " on" : "")} 
        id={props.id} onClick={() => props.handleClick()}>
            <div className="handle"></div>
        </div>
	)
}
export default SwitchDot;