import React, {useState, useEffect} from 'react';
import "../assets/css/dropdown.css";
import Dot3 from './dot3';
function  Dropdown() {
	let [listProfile, setListProfile] = useState([{id:1,name:"default profile"}, {id:2, name: "profile 2"},
	{id:3, name: "profile 3"},  {id:4, name: "profile 4"},  {id:5, name: "profile 5"},  {id:6, name: "profile 6"},
	{id:7, name: "profile 7"},  {id:8, name: "profile 8"}]);
	let [isShow, setIsShow] = useState(false);
	let [countNew, setCountNew] = useState(0);
	let [isDisable, setIsDisable] = useState(false);
	let [profile, setProfile] = useState(listProfile[4]);
	let [expand, setExpand] = useState("");
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
		if(rename){
			document.getElementById("profileEdit").focus();
		}
		if(listProfile.length===1){
			setIsDisable(true);
			setExpand("");
			setIsShow(false);
		}else {
			setIsDisable(false);
		}
	},[isShow, rename, listProfile.length]);
	const renameProfile = () => {
		let newList = [...listProfile];
		let index = newList.findIndex(item => item.id===profile.id);
		newList[index] = profile;
		setListProfile(newList);
		setRename(false);
	}
	const insertAndDup = (func) => {
		let newProfile = {...profile};
		let open = profile.name.lastIndexOf('(');
		let close = profile.name.lastIndexOf(')');
		let countDup = 0;
		let name = 'New Profile';
		switch(func){
			case "new":
				if(countNew > 0) {
					name = 'New Profile' + ' ('+countNew+')';
				}
				setCountNew((count) => count+1);
				listProfile.push({id: listProfile[listProfile.length-1].id+1, name: name});
				break;
			case "dup":
				if(open > 0 && close > 0 && close > open) {
					countDup = parseInt(newProfile.name.substring(open+1,close)) + 1;
					newProfile.name = newProfile.name.substring(0, open);
				} else {
					countDup = 1;
				}
				newProfile.name = newProfile.name + " (" + countDup + ")";
				listProfile.push({...newProfile, id: (listProfile[listProfile.length -1].id +1)});
				break;
		}
		setProfile(listProfile[listProfile.length - 1]);
	}
	const deleteProfile = () => {
		let prof = listProfile.findIndex((item) => item.id === profile.id);
		listProfile.splice(prof,1);
		setProfile(listProfile[(prof>0 ? (prof-1) : (prof))]);
	}
	return(
		<>
		<form onSubmit={(e) => {
			e.preventDefault();
			renameProfile();
		}}>
			<input className={rename ? "show" : ""} type="text" 
			name="profile" id="profileEdit" maxLength="25" 
			value={rename ? profile.name : ""}
			onChange={(e) => {
				setProfile({...profile,name: e.target.value});
			}}
			onBlur={() => renameProfile()}/>
		</form>
		<div className="dropdown-area">
			<div id="profileDrop" 
			className={"s3-dropdown" + expand + (isDisable ? " disabled" : "")} 
			onClick={() => setIsShow(!isShow)}>
				<div className="selected">{profile.name}</div>
				<div className="icon expand"></div>
			</div>
			<div id="profileDropOpt" className={"s3-options flex" + expand}>
				{listProfile.map((x,i) => 
					<div key={i} 
					className={profile.id===x.id? "option selected" : "option"}
					onClick={() => {
						setProfile(x);
					}}>{x.name}
					</div>)
				}
			</div>
		</div>
		<Dot3
			renameProfile={() => {
				setRename(true);
			}}
			insertAndDup = {(func)=> insertAndDup(func)} 
			deleteProfile = {deleteProfile} />
        </>
	)
}
export default Dropdown;