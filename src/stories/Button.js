import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label, variant, isDisabledShadow, disabled, startIcon, endIcon, size, color
}) => {

  const classes = `btn 
    ${variant && `btn--${variant}`} 
    ${isDisabledShadow ? 'btn--disabled-shadow' : ''} 
    ${size && `btn--${size}`} 
    ${color}`;
    
  return (
    <button
      className={classes}
      disabled={disabled}
    >
      <span class="material-icons">&#xE87C;</span>

      {label}
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </button>
  );
};

