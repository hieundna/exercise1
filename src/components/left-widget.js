import React, { useState } from 'react';
import "../css/switch.css";
import "../css/slider.css";
import "../css/body-widgets.css";
import SwitchDots from './switchdots';
import Slider from './slider';

function SwitchDot() {
	let [onPhoneSwitch, setOnPhoneSwitch] = useState(true);
	let [onSensiSwitch, setOnSensiSwitch] = useState(true);
	// let sliderPhone = document.getElementById('slPhoneRange');
	// let sliderSensi = document.getElementById('slSensiRange');
	//let [tips, setTips] = useState(sliderDom.value);
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

	// const getPercent = () => {
	// 	let min = parseInt(sliderDom.min);
	// 	let max = parseInt(sliderDom.max);
	// 	return (sliderDom.value - min) / (max - min);
	// }
	// const getPosition = () => {
	// 	let sizing = sliderDom.getBoundingClientRect().width;
	// 	let tipDiv = document.getElementById(sliderId+'Tip');
	// 	let tipWidth = tipDiv.getBoundingClientRect().width;
	// 	return getPercent() * (sizing-16) - tipWidth/2+8;
	// }
	// const updateValue = () => {
	// 	let sizing = sliderDom.getBoundingClientRect().width;
	// 	let tipDiv = document.getElementById(sliderId+'Tip');
	// 	let fillDiv = document.getElementById(sliderId+'Fill');
	// 	setTips(sliderDom.value);
	// 	tipDiv.style.left = getPosition() + 'px';
	// 	this.fillDiv.style.width = this.getPercent() * (sizing-16)+8 + 'px';
	// }	
	// const handleMouseMove = () => {
	// 	if(!this.containerDom.classList.contains('on')) {
	// 		return;
	// 	}
	// 	if(mouseIsDown) {
	// 		console.log(mouseIsDown);
	// 		this.updateValue();
	// 	}
	// }
	return(
		<div className="widget" id="micPhone">
			<div className="help"></div>
			<div className="tip">
				I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
			</div>

			<div className="title">microphone
				<SwitchDots id="swPhone" handleClick={() => handleClick("phone")} onSwitch={onPhoneSwitch}/>
			</div>

			<div className="h2-title">mic volume</div>
			<Slider id="slPhone" onSwitch={onPhoneSwitch}/>

			<div className="h2-title mt20">mic sensitivity
				<SwitchDots id="swSensi" handleClick={() => handleClick("sensi")} onSwitch={onSensiSwitch}/>
			</div>

			<div className="h2-body">Adjust this setting to remove unwanted background noise or increase the amount of mic output heard</div>
			<Slider id="slPhone" onSwitch={onSensiSwitch}/>

		</div>
	)
}
export default SwitchDot;