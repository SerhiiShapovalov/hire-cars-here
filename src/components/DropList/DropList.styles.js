export const getCustomStyles = className => ({
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
  }),

  menuList: provided => ({
    ...provided,
    overflowY: 'auto',
    overflowX: 'hidden',
    height: className === 'brand-drop-list' ? '272px' : '188px',
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(18, 20, 23, 0.05)',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#FFF',
    },
  }),

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
});
