import React from 'react';
import "../css/switch.css";
import Slider from "./slider";

function SwitchDot() {
	return(
		<div className="widget" id="micPhone">
			<div className="help"></div>
			<div className="tip">
				I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
			</div>

			<div className="title">microphone
				<div className="switch on switch-slider" id="swPhone">
					<div className="handle"></div>
				</div>
			</div>

			<div className="h2-title">mic volume</div>
			<Slider />

			<div className="h2-title mt20">mic sensitivity
				<div className="switch on switch-slider" id="swSensi">
					<div className="handle"></div>
				</div>
			</div>
			<div className="h2-body">Adjust this setting to remove unwanted background noise or increase the amount of mic output heard</div>
			<div className="slider-container" id="slSensi">
				<input type="range" min="10" max="100" value="55" step="1" className="slider" id="slSensiRange" />
			</div>

		</div>
	)
}
export default SwitchDot;