import React, { useState } from 'react'
import ErrorIcon from '@mui/icons-material/Error'
import CloseIcon from '@mui/icons-material/Close'
import './ErrorCopyToaster.scss'

const ErrorCopyToaster = ({ message }) => {
    const [visible, setVisible] = useState(true)

    const handleClose = () => {
        setVisible(false);
    }

  return (
    <>
        {
            visible && (
                <div className="error-copy-toaster-container">
                    <div className="error-copy-error-copy-left-bar"></div>
                    <div className="error-copy-icon-wrapper">
                        <ErrorIcon className="error-copy-icon" />
                    </div>
                    <div className="error-copy-toaster-message">{message}</div>
                    <CloseIcon style={{ fontSize: '15px' }} className="error-copy-close-icon" onClick={handleClose} />
                </div>
            )
        }
    </>
  );
};

export default ErrorCopyToaster;
