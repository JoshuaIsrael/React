import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete}) => {
  return (
    <div className='task'>
      <h3>
        {task.text} 
        <FaTimes 
          style={{color: 'red', cursor: 'pointer'}} 
          onClick={() => {onDelete(task.id)}}/>
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};

Task.defaultProps = {};

export default Task;
