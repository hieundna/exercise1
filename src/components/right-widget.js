import React, { useState } from 'react';
import "../assets/css/switch.css";
import "../assets/css/slider.css";
import "../assets/css/body-widgets.css";
import "../assets/css/checkbox.css";
import SwitchDots from './switchdots';
import Slider from './slider';

function SwitchDot() {
    let [onSideSwitch, setOnSideSwitch] = useState(false);
    let [onNormSwitch, setOnNormSwitch] = useState(false);
    let [onAmbSwitch, setOnAmbSwitch] = useState(false);
    let [onClaritySwitch, setOnClaritySwitch] = useState(false);
    
	let [sideValue, setSideValue] = useState("50");
	let [normValue, setNormValue] = useState("50");
	let [ambValue, setAmbValue] = useState("50");
	let [clarityValue, setClarityValue] = useState("50");
	const handleClick = (func) => {
        switch(func){
			case "side":
                setOnSideSwitch(!onSideSwitch);
				break;
			case "norm":
				setOnNormSwitch(!onNormSwitch);
				break;
            case "amb":
                setOnAmbSwitch(!onAmbSwitch);
                break;
            case "clarity":
                setOnClaritySwitch(!onClaritySwitch);
                break;
		}
	}
	const handleChange = (e) => {
		switch(e.target.id){
			case "slSideRange":
				setSideValue(e.target.value);
				break;
			case "slNormRange":
				setNormValue(e.target.value);
				break;
            case "slAmbRange":
                setAmbValue(e.target.value);
                break;
            case "slClarityRange":
                setClarityValue(e.target.value);
                break;
			default:
				break;				
		}
	}
	return(
        <>
		    <div className="widget" id="micSidetone">
                <div className="help"></div>
                <div className="tip">
                    I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
                </div>
                <div className="title">sidetone
                    <SwitchDots 
                        id="swSide" 
                        handleClick={() => handleClick("side")} 
                        onSwitch={onSideSwitch}
                    />
                </div>
                <Slider 
                    id="slSide" 
                    onSwitch={onSideSwitch}
                    value={sideValue}
                    handleChange={(e) => handleChange(e)}
                    min="0"
                    max="100"
                />
            </div>
            <div className="widget" id="micEnhance">
                <div className="help"></div>
                <div className="tip">
                    I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
                </div>
                <div className="title">enhancements</div>

                <div className="check-item">
                    <input type="checkbox" id="checkNorm"  onClick={() => handleClick("norm")}/>
                    <label htmlFor="checkNorm" className="check-box">
                        <div className="check-text">Volume Normalization</div>
                    </label>
                </div>
                <Slider 
                    id="slNorm" 
                    onSwitch={onNormSwitch}
                    value={normValue}
                    handleChange={(e) => handleChange(e)}
                />

                <div className="check-item">
                    <input type="checkbox" id="checkAmb" onClick={() => handleClick("amb")} />
                    <label htmlFor="checkAmb" className="check-box">
                        <div className="check-text">Ambient Noise Reduction</div>
                    </label>
                </div>
                <Slider 
                    id="slAmb" 
                    onSwitch={onAmbSwitch}
                    value={ambValue}
                    handleChange={(e) => handleChange(e)}
                />

                <div className="check-item">
                    <input type="checkbox" id="checkClarity" onClick={() => handleClick("clarity")} />
                    <label htmlFor="checkClarity" className="check-box">
                        <div className="check-text">Voice Clarity</div>
                    </label>
                </div>
                <Slider 
                    id="slClarity" 
                    onSwitch={onClaritySwitch}
                    value={clarityValue}
                    handleChange={(e) => handleChange(e)}
                />

            </div>
        </>
	)
}
export default SwitchDot;