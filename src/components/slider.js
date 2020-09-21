import React, { useState } from 'react';
import "../css/switch.css";
import "../css/slider.css";
import "../css/body-widgets.css";

function SwitchDot(props) {
	return(
			<div className={"slider-container" + (props.onSwitch ? " on" : "")} id={props.id}>
				<div className="foot min">low</div>
				<div className="foot mid">medium</div>
				<div className="foot max">high</div>
				<div id={props.id+"Fill"} className="left" style={{width: "260px"}}></div>
				<div className="track"></div>
				<div id={props.id+"Tip"} className="slider-tip" style={{left: "245.32px"}}>55</div>
				<input type="range" min="10" max="100" value="55" step="1" className="slider" id={props.id+"Range"} 
					disabled={props.onSwitch ? false : true}/>
			</div>
	)
}
export default SwitchDot;