import React from 'react';

export const Button = (props) => {
  return (
    <button
      disabled={props.disabled ? true : false}
      className={`btn ${props.className ? props.className : ''} ${props.disabled ? 'disabled' : ''}`}
      type={props.type}
      onClick={props.clicked}>{props.children}</button>
  )
};