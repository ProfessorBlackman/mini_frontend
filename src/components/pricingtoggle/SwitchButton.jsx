import './SwitchButton.css';
import PropTypes from "prop-types";

const SwitchButton = ({isOn, handleToggle, onColor}) => {
     return (
    <label style={{ background: isOn && onColor }} className="react-switch">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        type="checkbox"
      />
        <div className="react-switch-button flex justify-center items-center">
          <span>{isOn ? 'Yearly' : 'Monthly'}</span>
        </div>
      <div className="react-switch-labels">
        <span>Monthly</span>
        <span>Yearly</span>
      </div>
    </label>
  );
};

export default SwitchButton;

SwitchButton.propTypes = {
    isOn: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired,
    onColor: PropTypes.string
}