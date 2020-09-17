import React from 'react';
import "../css/slider.css";
function Slider() {

	return(
		<div className="slider-container on" id="slPhone">
			<input type="range" min="10" max="100" value="55" step="1" className="slider" id="slPhoneRange" />
		</div>
	)
}
export default Slider;