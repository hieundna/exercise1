import React, { useState, Fragment } from 'react';
import "../css/profile-bar.css";
function  Dot3(props) {
    let [isShow, setIsShow] = useState(false);
    document.addEventListener('click', function(event) {
        if (!document.getElementById('profileMenuToggle').contains(event.target)) {
          setIsShow(false);
        }
    });
    return(
        <Fragment>
            <div className={"dots3 hover-border" + (isShow ? " active": "")} 
                id="profileMenuToggle"
                onClick={(()=>setIsShow(!isShow))}>
                <div className={"profile-act" + (isShow ? " show": "")} 
                    id="profileMenu">
                    <div className="act action"
                        onClick={props.addProfile}>add</div>
                    <div className="act action">import</div>
                    <div className="act divider"></div>
                    <div className="act action"
                        onClick={props.renameProfile}>rename</div>
                    <div className="act action">duplicate</div>
                    <div className="act action">export</div>
                    <div className="act divider"></div>
                    <div className="act action" id="deleteAction">delete</div>
                </div>
            </div>

            <div id="deleteAlert" className="flex alert profile-del">
                <div className="title">delete profile</div>
                <div className="body-text t-center">
                    You're about to delete this profile. All bindings in this profile will be deleted.
                </div>
                <div className="thx-btn" id="deleteConfirm">delete</div>
            </div>
        </Fragment>
    )
}
export default Dot3;