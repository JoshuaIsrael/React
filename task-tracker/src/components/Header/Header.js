import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Header = ({title}) => {
  const onClick = () => {
    console.log('Test !!');
  }

  return (
  <div>
    <header className='header'>
      <h1>{title}</h1>
      <Button text='Add' color='green' onClick={onClick}></Button>
    </header>
  </div>
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: 'Task Tracker'
};

export default Header;
