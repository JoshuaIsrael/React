import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Header = ({title, onAddTask, showAddTask}) => {
  return (
  <div>
    <header className='header'>
      <h1>{title}</h1>
      <Button text={showAddTask? 'Close' : 'Add'} color={showAddTask? 'red' : 'green'} onClick={onAddTask}></Button>
    </header>
  </div>
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func,
};

Header.defaultProps = {
  title: 'Task Tracker'
};

export default Header;
