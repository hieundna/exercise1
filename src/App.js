import React from 'react';
import "./assets/font/roboto.css";
import "./assets/font/razerf5.css";
import "./assets/css/main.css";
import "./assets/css/nav.css";
import "./assets/css/tooltip.css";
import Dropdown from './components/dropdown';
import LeftWidget from './components/left-widget';
import RightWidget from './components/right-widget';
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
						<RightWidget />
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
