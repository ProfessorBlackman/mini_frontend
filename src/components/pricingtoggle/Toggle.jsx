import {useState} from "react";
import "./toggle.css";

export function Toggle() {
    const [isYearly, setIsYearly] = useState(false);

    const handleToggle = () => {
        setIsYearly(prevState => !prevState);
    };
    return (
        <div className="toggle-container">
            <label className="toggle">
                <input type="checkbox" checked={isYearly} onChange={handleToggle} className="check"/>
                <span className="slider round"></span>
            </label>
            <span className="toggle-text">{isYearly ? 'Yearly' : 'Monthly'}</span>
        </div>
    )
}