import './form-input.style.scss';
import React from 'react';

const FormInput = ({ handleChange, label, ...restProps }) => {
  return (
    <div className='group'>
      <input
        className='form-input'
        onChange={handleChange}
        {...restProps}
      ></input>
      {label ? (
        <label
          className={`${
            restProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
