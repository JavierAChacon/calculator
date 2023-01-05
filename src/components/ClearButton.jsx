import React from 'react';
import '../styles/clearButton.css';

const ClearButton = (props) => (
    <div className='clearButton' onClick={() => props.manageClick()}>
      {props.children}
    </div>
);

export default ClearButton;