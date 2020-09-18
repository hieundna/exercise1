import React from 'react';
import "./font/roboto.css";
import "./font/razerf5.css";
import "./css/main.css";
import "./css/nav.css";
import "./css/checkbox.css";
import "./css/tooltip.css";
import Dropdown from './components/dropdown';
import LeftWidget from './components/left-widget';
import './App.css';

function App() {

  return (
    <div className="main-container">

			<div className="nav-tabs flex">
				<div className="nav arrow back"></div>
				<div className="nav arrow forward disabled"></div>

				<a className="nav" href="./sound.html">sound</a>
				<a className="nav" href="./mixer.html">mixer</a>
				<a className="nav" href="./enhancement.html">enhancement</a>
				<a className="nav" href="./eq.html">eq</a>
				<a className="nav active" href="./mic.html">mic</a>
				<a className="nav" href="./lighting.html">lighting</a>
				<a className="nav" href="./power.html">power</a>

				<div className="user">
					<div className="avatar"></div>
				</div>
			</div>
			
			<div className="body-wrapper scrollable">

				<div className="profile-bar flex">
					<div className="loader" tooltip="Syncing Profiles"></div>
					<div>profile</div>
					<Dropdown />
					<div className="obm hover-border" tooltip="On-board Profiles"></div>
					<div className="divider"></div>
					<div className="batt batt-30" tooltip="30% Battery"></div>
				</div>

				<div className="body-widgets flex">

					<div className="widget-col col-left flex">
						<LeftWidget />
					</div>

					<div className="widget-col col-right flex">
						<div className="widget" id="micSidetone">
							<div className="help"></div>
							<div className="tip">
								I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
							</div>
							<div className="title">sidetone<div className="switch switch-slider" id="swSide"><div className="handle"></div></div></div>
							<div className="slider-container" id="slSide">
								<input type="range" min="0" max="100" value="50" step="1" className="slider" id="slSideRange" />
							</div>
						</div>
						<div className="widget" id="micEnhance">
							<div className="help"></div>
							<div className="tip">
								I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
							</div>
							<div className="title">enhancements</div>

							<div className="check-item">
								<input type="checkbox" id="checkNorm" /><label htmlFor="checkNorm" className="check-box"><div className="check-text">Volume Normalization</div></label>
							</div>
								<div className="slider-container" id="slNorm">
									<input type="range" min="10" max="100" value="50" step="1" className="slider" id="slNormRange" />
								</div>

							<div className="check-item">
								<input type="checkbox" id="checkAmb" /><label htmlFor="checkAmb" className="check-box"><div className="check-text">Ambient Noise Reduction</div></label>
							</div>
								<div className="slider-container" id="slAmb">
									<input type="range" min="10" max="100" value="50" step="1" className="slider" id="slAmbRange" />
								</div>

							<div className="check-item">
								<input type="checkbox" id="checkClarity" /><label htmlFor="checkClarity" className="check-box"><div className="check-text">Voice Clarity</div></label>
							</div>
								<div className="slider-container" id="slClarity">
									<input type="range" min="10" max="100" value="50" step="1" className="slider" id="slClarityRange" />
								</div>

						</div>
					</div>
				</div>
			</div>
			<div className="name-bar">
				razer nari ultimate
			</div>
		</div>
  );
}

export default App;
