import React, { useState } from 'react';
import { DropListStyle } from './DropList.styled';

export const DropList = ({ data, placeholder, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = event => {
    setSelectedOption(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <>
      {data && (
        <DropListStyle value={selectedOption} onChange={handleChange}>
          {placeholder && (
            <option className="placeholder" value="">
              {placeholder}
            </option>
          )}
          {data.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </DropListStyle>
      )}
    </>
  );
};
