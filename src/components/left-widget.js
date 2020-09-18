import React, { useState } from 'react';
import "../css/switch.css";
import "../css/slider.css";
import "../css/body-widgets.css";

function SwitchDot() {
	let [onPhoneSwitch, setOnPhoneSwitch] = useState(true);
	let [onSensiSwitch, setOnSensiSwitch] = useState(true);
	const handleClick = (func) => {
		switch(func){
			case "phone":
				setOnPhoneSwitch(!onPhoneSwitch);
				break;
			case "sensi":
				setOnSensiSwitch(!onSensiSwitch);
				break;
		}
	}
	return(
		<div className="widget" id="micPhone">
			<div className="help"></div>
			<div className="tip">
				I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
			</div>

			<div className="title">microphone
				<div className={"switch switch-slider" + (onPhoneSwitch ? " on" : "")} 
				id="swPhone"  onClick={() => handleClick("phone")}>
					<div className="handle"></div>
				</div>
			</div>

			<div className="h2-title">mic volume</div>
			
			<div className={"slider-container" + (onPhoneSwitch ? " on" : "")} id="slPhone">
				<div className="foot min">low</div>
				<div className="foot mid">medium</div>
				<div className="foot max">high</div>
				<div id="slPhoneFill" className="left" style={{width: "260px"}}></div>
				<div className="track"></div>
				<div id="slPhoneTip" className="slider-tip" style={{left: "245.32px"}}>55</div>
				<input type="range" min="10" max="100" value="55" step="1" className="slider" id="slPhoneRange" 
				/>
			</div>

			<div className="h2-title mt20">mic sensitivity
				<div className={"switch switch-slider"  + (onSensiSwitch ? " on" : "")} 
				id="swSensi" onClick={() => handleClick("sensi")}>
					<div className="handle"></div>
				</div>
			</div>
			<div className="h2-body">Adjust this setting to remove unwanted background noise or increase the amount of mic output heard</div>
			<div className={"slider-container" + (onSensiSwitch ? " on" : "")} id="slSensi">
				<div className="foot min">low</div>
				<div className="foot mid">medium</div>
				<div className="foot max">high</div>
				<div id="slSensiFill" className="left" style={{width: "260px"}}></div>
				<div className="track"></div>
				<div id="slSensiTip" className="slider-tip" style={{left: "245.32px"}}>55</div>
				<input type="range" min="10" max="100" value="55" step="1" className="slider" id="slSensiRange" 
				/>
			</div>

		</div>
	)
}
export default SwitchDot;