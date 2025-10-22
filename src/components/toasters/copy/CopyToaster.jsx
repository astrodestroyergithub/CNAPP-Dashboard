import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InfoIcon from '@mui/icons-material/Info'
import CloseIcon from '@mui/icons-material/Close'
import './CopyToaster.scss'

const CopyToaster = ({ message }) => {
    const [visible, setVisible] = useState(true)
    const dispatch = useDispatch()

    const handleClose = () => {
        setVisible(false);
    }

  return (
    <>
        {
            visible && (
                <div className="copy-toaster-container">
                    <div className="copy-left-bar"></div>
                    <div className="copy-icon-wrapper">
                        <InfoIcon className="copy-info-icon" />
                    </div>
                    <div className="copy-toaster-message">{message}</div>
                    <CloseIcon style={{ fontSize: '15px' }} className="copy-close-icon" onClick={handleClose} />
                </div>
            )
        }
    </>
  );
};

export default CopyToaster;
