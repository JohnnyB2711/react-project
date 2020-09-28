import React from "react";
import {PopupboxContainer, PopupboxManager} from "react-popupbox";
import MovieDetailed from "../components/MovieDetailed";

const Popup = (props) => {
    var movieLocal;
    const popupboxConfig = {
        titleBar: {
            enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 500,
        onClosed() {
            props.changePopup()
        }
    };
    const content = (<MovieDetailed/>);
    const openPopup = () => {
        PopupboxManager.open({content})
    };

    if (props.isOpen) {
        openPopup();
    }
    return (
        <PopupboxContainer {...popupboxConfig} />
    );
};
export default Popup