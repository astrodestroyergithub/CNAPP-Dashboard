import { useState } from 'react';
import './HeaderToolbarSection.scss';
import { useDispatch } from 'react-redux';
import { setModalOpen } from '../store/dashboardSlice';
import ThreeDotMenu from './ThreeDotMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSyncAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const HeaderToolbarSection = () => {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState('Last 2 days');
  const options = ['Last 1 hour', 'Today', 'Yesterday', 'Last 2 days', 'Last week'];

  const handleAddWidgetClick = () => {
    dispatch(setModalOpen({open:true}));
  };

  const handleRefreshClick = () => {
    window.location.reload();
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="toolbar-container">
      <button className="add-widget" onClick={handleAddWidgetClick}>
        <FontAwesomeIcon icon={faPlus} className="icon" />
        <span>Add Widget</span>
      </button>

      <button className="icon-only-button" onClick={handleRefreshClick}>
        <FontAwesomeIcon icon={faSyncAlt} className="icon refresh-icon" />
      </button>

      <ThreeDotMenu />

      <div className="dropdown-container">
        <FontAwesomeIcon icon={faClock} className="clock-icon" />
        <div className="vertical-divider"></div>
        <select className="dropdown" value={selectedOption} onChange={handleOptionChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HeaderToolbarSection;
