import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text, color, onClick}) => {
  return (
    <div>
      <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
    </div>
  )
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'steelblue',
};

export default Button;
