import React, { useState } from 'react';
import "../assets/css/switch.css";
import "../assets/css/slider.css";
import "../assets/css/body-widgets.css";
import SwitchDots from './switchdots';
import Slider from './slider';

function SwitchDot() {
	let [onPhoneSwitch, setOnPhoneSwitch] = useState(true);
	let [onSensiSwitch, setOnSensiSwitch] = useState(true);
	let [phoneValue, setPhoneValue] = useState("55");
	let [sensiValue, setSensiValue] = useState("55");
	const handleClick = (func) => {
		switch(func){
			case "phone":
				setOnPhoneSwitch(!onPhoneSwitch);
				break;
			case "sensi":
				setOnSensiSwitch(!onSensiSwitch);
				break;
			default:
				break;
		}
	}
	const handleChange = (e) => {
		switch(e.target.id){
			case "slPhoneRange":
				setPhoneValue(e.target.value);
				break;
			case "slSensiRange":
				setSensiValue(e.target.value);
				break;
			default:
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
				<SwitchDots 
					id="swPhone" 
					handleClick={() => handleClick("phone")} 
					onSwitch={onPhoneSwitch}
				/>
			</div>

			<div className="h2-title">mic volume</div>
			<Slider 
				id="slPhone" 
				value={phoneValue}
				onSwitch={onPhoneSwitch}
				handleChange={(e) => handleChange(e)}
			/>

			<div className="h2-title mt20">mic sensitivity
				<SwitchDots 
					id="swSensi" 
					handleClick={() => handleClick("sensi")} 
					onSwitch={onSensiSwitch}
				/>
			</div>

			<div className="h2-body">Adjust this setting to remove unwanted background noise or increase the amount of mic output heard</div>
			<Slider 
				id="slSensi" 
				value={sensiValue}
				handleChange={(e) => handleChange(e)}
				onSwitch={onSensiSwitch}
			/>

		</div>
	)
}
export default SwitchDot;