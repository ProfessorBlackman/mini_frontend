import {Icon} from "../icon/Icon.jsx";
import PropTypes from "prop-types";
import "./iconbar.css";

export function FeatureBox({iconbardetails}) {
    return (
            <div className="iconbar">
                <div className="title-div">
                    <Icon icon={iconbardetails[0]}/>
                    <h3 className="feature-title">{iconbardetails[0].text}</h3>
                </div>
                <p className="description">
                    {iconbardetails[0].description}
                </p>
            </div>
    )
}

FeatureBox.propTypes = {
    iconbardetails: PropTypes.node.isRequired
}