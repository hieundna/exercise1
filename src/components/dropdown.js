import React, {useState, useEffect, Fragment} from 'react';
import "../css/dropdown.css";
import Dot3 from './dot3';
function  Dropdown() {
	let [listProfile, setListProfile] = useState(["default profile", "profile 2",
	 "profile 3", "profile 4", "profile 5", "profile 6", "profile 7", "profile 8"]);
	let [isShow, setIsShow] = useState(false);
	let [profile, setProfile] = useState(listProfile[4]);
	let [expand, setExpand] = useState("");
	let [count, setCount] = useState(0);
	let [rename, setRename] = useState(false);

    document.addEventListener('click', function(event) {
        if (!document.getElementById('profileDrop').contains(event.target)) {
          setIsShow(false);
        }
    });
	
	useEffect(() => {
		if(isShow){
			setExpand(" expand");
		}else{
			setExpand("");
		}
	},[isShow]);

	useEffect(() =>{
		if(count>0){
			listProfile.push("New profile"+ " ("+count+")");
		}else{
			listProfile.push("New profile");
		}
		setProfile(listProfile[listProfile.length-1]);
		setCount(count++);
	}, [count]);
	return(
		<Fragment>
		<form>
			<input className={rename ? "show" : ""} type="text" 
			name="profile" id="profileEdit" maxLength="25" 
			value={rename ? profile : ""}
			onChange={(e) => {
				setProfile(e.target.value);
			}}/>
		</form>
		<div className="dropdown-area">
			<div id="profileDrop" className={"s3-dropdown" + expand} onClick={() => setIsShow(!isShow)}>
				<div className="selected">{profile}</div>
				<div className="icon expand"></div>
			</div>
			<div id="profileDropOpt" className={"s3-options flex" + expand}>
				{listProfile.map((x,i) => 
					<div key={i} 
					className={profile===x ? "option selected" : "option"}
					onClick={() => {
						setProfile(x);
					}}>{x}
					</div>)
				}
			</div>
		</div>
		<Dot3 addProfile={() => setCount(count++)} renameProfile={() => setRename(true)} />
        </Fragment>
	)
}
export default Dropdown;