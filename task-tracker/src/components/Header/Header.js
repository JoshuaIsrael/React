import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Header = ({title, onOpenAddTask, showAddTask}) => {
  return (
  <div>
    <header className='header'>
      <h1>{title}</h1>
      <Button text={showAddTask? 'Close' : 'Add'} color={showAddTask? 'red' : 'green'} onClick={onOpenAddTask}></Button>
    </header>
  </div>
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onOpenAddTask: PropTypes.func,
};

Header.defaultProps = {
  title: 'Task Tracker'
};

export default Header;
