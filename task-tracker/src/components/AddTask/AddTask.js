import { React, useState } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({onAddTask}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text){
      alert('Please add a task');
      return;
    }

    onAddTask({
      "text": text,
      "day": day,
      "reminder": reminder
    });

    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={text} onChange={(e) => {setText(e.target.value)}}></input>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => {setDay(e.target.value)}}></input>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => {setReminder(e.currentTarget.checked)}}></input>
      </div>
      <input className='btn btn-block' type='submit' value='Save Task'></input>
    </form>
  )
};

AddTask.propTypes = {
  onAddTask: PropTypes.func,
};

AddTask.defaultProps = {};

export default AddTask;
