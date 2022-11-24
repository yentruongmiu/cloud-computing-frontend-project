import React from 'react';

export const Textarea = (props) => {
  const { floating, className, label, invalid } = props;

  return (
    <div className={`mb-3 ${floating ? 'form-floating' : ''} ${className ? className : ''}`}>
      {
        floating &&
        <textarea
            className={`form-control ${invalid ? 'is-invalid' : ''}`}
          placeholder={props.placeholder ? props.placeholder : ''}
          id={props.id}
          name={props.name}
          rows={props.rows}
          onChange={props.changed}
          >{props.children}</textarea>
      }
      <label
        className='form-label'
        htmlFor={props.id}
      >{label}</label>
      {
        !floating &&
        <textarea
            className={`form-control ${invalid ? 'is-invalid' : ''}`}
            placeholder={props.placeholder ? props.placeholder : ''}
            id={props.id}
            name={props.name}
            rows={props.rows}
            onChange={props.changed}
        >{props.children}</textarea>
      }
    </div>
  );
};