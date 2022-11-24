import React from 'react';

import './Snackbar.css';

export const Snackbar = (props) => {


  let className = '';
  switch (props.status) {
    case 'success':
      className = 'alert-success';
      break;
    case 'danger':
      className = 'alert-danger';
      break;
    case 'warning':
      className = 'alert-warning';
      break;
    case 'info':
      className = 'alert-info';
      break;
    default:
      className = 'alert-dark';
      break;
  }

  return (
    <div className={`snackbar ${className} ${props.isShow === true ? 'show' : ''}`} role="alert" >
      {props.message}
    </div>
  );
}