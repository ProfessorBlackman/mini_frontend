import {Icon} from "../icon/Icon.jsx";
import PropTypes from "prop-types";
import "./iconbar.css";

export function FeatureBox({iconbardetails}) {
    return (
            <div className="iconbar">
                <div className="title-div">
                    <Icon icon={iconbardetails.icon}/>
                    <h3 className="feature-title">{iconbardetails.text}</h3>
                </div>
                <p className="description">
                    {iconbardetails.description}
                </p>
            </div>
    )
}

FeatureBox.propTypes = {
    iconbardetails: PropTypes.node.isRequired
}