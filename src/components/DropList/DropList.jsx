import React from 'react';
import Select from 'react-select';
import { getCustomStyles } from './DropList.styles';

const DropList = ({ data, placeholder, onChange, className }) => {
  const handleChange = selectedOption => {
    if (onChange) {
      onChange(selectedOption.value);
    }
  };

  const options = data.map((option, index) => ({
    value: option,
    label: option,
  }));

  const customStyles = getCustomStyles(className);

  return (
    <Select
      options={options}
      isClearable
      value={options.find(opt => opt.value === placeholder)}
      onChange={handleChange}
      placeholder={placeholder}
      styles={customStyles}
      className={className}
    />
  );
};

export default DropList;
