import React, { useState } from 'react';
import './HeaderToolbarSection.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setModalOpen } from '../store/dashboardSlice';
import ThreeDotMenu from './ThreeDotMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSyncAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const HeaderToolbarSection = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.dashboard);

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
      <button className="toolbar-button add-widget" onClick={handleAddWidgetClick}>
        <FontAwesomeIcon icon={faPlus} className="icon" />
        <span className="button-text">Add Widget</span>
      </button>

      <button className="toolbar-button icon-only-button" onClick={handleRefreshClick}>
        <FontAwesomeIcon icon={faSyncAlt} className="icon refresh-icon" />
      </button>

      {/* <button onClick={handleKebabIconClick} className="toolbar-button icon-only-button">
        <FontAwesomeIcon icon={faEllipsisV} className="icon" />
      </button> */}

      <ThreeDotMenu />

      {/* <div className="divider"></div> */}

      <div className="dropdown-container">
        <FontAwesomeIcon icon={faClock} className="icon clock-icon" />
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
