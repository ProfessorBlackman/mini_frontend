import PropTypes from "prop-types";
import "./icon.css";

export function Icon({icon}) {
    return (
        <div className="Icon-BG">
            <img src={icon.url} className="Icon-Img" alt={icon.alt}/>
        </div>
    )
}

Icon.propTypes = {
    icon: PropTypes.node.isRequired
}