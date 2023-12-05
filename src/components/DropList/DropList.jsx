import React from 'react';
import Select from 'react-select';
// import { Scrollbar } from 'react-scrollbars-custom';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    fontSize: '18px',
    color: '#121417',
    fontWeight: 500,
    lineHeight: 'calc(20 / 18)',
    fontFamily: 'inherit',
    background: '#f7f7fb',
    borderRadius: '14px',
    borderColor: state.isFocused ? '#0b44cd' : 'transparent',
    paddingInline: '18px',
    height: '40px',
    cursor: 'pointer',
    '@media (min-width: 768px)': {
      height: '48px',
    },
  }),

  menu: provided => ({
    ...provided,
    padding: '14px 8px 6px 18px',
    borderRadius: '14px',
    scrollbar: 'hidden',
    // overflowY: 'auto', // Включаем вертикальную прокрутку
    // maxHeight: '200px', // Задаем максимальную высоту, чтобы появилась прокрутка
    // scrollbarWidth: 'thin', // Для Firefox
    // '&::-webkit-scrollbar': {
    //   width: '12px',
    // },
    // '&::-webkit-scrollbar-thumb': {
    //   backgroundColor: '#888', // Цвет полосы прокрутки
    //   borderRadius: '10px',
    // },
    // '&::-webkit-scrollbar-track': {
    //   backgroundColor: '#f1f1f1', // Цвет трека
    // },
    // overflow: 'hidden', // Это для предотвращения стандартного скролла от браузера
  }),

  // scrollbar: (provided, state) => ({
  //   ...provided,
  //   overflow: 'hidden',

  //   '&::-webkit-scrollbar-thumb': {
  //     overflow: 'hidden',
  //   },

  // '&::-webkit-scrollbar': {
  //   width: '12px',
  // },
  // '&::-webkit-scrollbar-thumb': {
  //   backgroundColor: '#888', // Цвет полосы прокрутки
  //   borderRadius: '10px',
  // },
  // '&::-webkit-scrollbar-track': {
  //   backgroundColor: '#f1f1f1', // Цвет трека
  // },
  // overflow: 'hidden', // Это для предотвращения стандартного скролла от браузера
  // }),

  option: (provided, state) => ({
    ...provided,
    marginBottom: '8px',
    padding: '0px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '20px',
    backgroundColor: 'white',
    color: state.isSelected
      ? '#121417'
      : 'rgba(18, 20, 23, 0.20)' && state.isFocused
      ? '#121417'
      : 'rgba(18, 20, 23, 0.20)',

    ':hover': {
      color: '#121417',
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: 0,
  }),
  indicatorSeparator: () => null,
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    padding: 0,
  }),
};

const DropList = ({ data, placeholder, onChange }) => {
  const handleChange = selectedOption => {
    if (onChange) {
      onChange(selectedOption.value);
    }
  };

  const options = data.map((option, index) => ({
    value: option,
    label: option,
  }));

  return (
    <Select
      options={options}
      value={options.find(opt => opt.value === placeholder)}
      onChange={handleChange}
      placeholder={placeholder}
      styles={customStyles}
      // clearIndicator='true'
    />
  );
};

export default DropList;
