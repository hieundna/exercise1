import React, { useState, useRef, useEffect } from 'react';
import "../assets/css/switch.css";
import "../assets/css/slider.css";
import "../assets/css/body-widgets.css";

function SwitchDot(props) {
	const [fillWidth, setFillWidth] = useState();
	const [tipLeft, setTipLeft] = useState();

	let sliderDom = useRef();
	let tipDiv = useRef();
	let fillDiv = useRef();

	const {id, onSwitch} = props;

	const min = props.min ? parseInt(props.min) : 10;
	const max = props.max ? parseInt(props.max) : 100;

	const getPercent = () => {
		return (sliderDom.current.value - min) / (max - min);
	}
	const getPosition = () => {
		let sizing = sliderDom.current.getBoundingClientRect().width;
		let tipWidth = tipDiv.current.getBoundingClientRect().width;
		return getPercent() * (sizing-16) - tipWidth/2+8;
	}
	useEffect(() => {
		let sizing = sliderDom.current.getBoundingClientRect().width;
		setFillWidth(() => (getPercent() * (sizing-16) + 8 + 'px'));
		setTipLeft(() => (getPosition() + 'px'));
	}, [props.value]);
	return(
			<div className={"slider-container" + (onSwitch ? " on" : "")} id={id}>
				<div className="foot min">{props.min ? props.min : "low"}</div>
				<div className="foot mid">medium</div>
				<div className="foot max">{props.max ? props.max : "high"}</div>
				<div 
					id={id+"Fill"} 
					ref={fillDiv}
					className="left"
					style={{width: fillWidth}} >
				</div>
				<div className="track"></div>
				<div 
					id={id+"Tip"} 
					ref={tipDiv} 
					className="slider-tip" 
					style={{left: tipLeft}}>
						{props.value}
				</div>
				<input type="range" 
					ref={sliderDom} 
					min={min} max={max} 
					value={props.value}
					onChange={(e) => props.handleChange(e)}
					step="1" 
					className="slider" 
					id={id+"Range"} 
					disabled={onSwitch ? false : true}/>
			</div>
	)
}
export default SwitchDot;