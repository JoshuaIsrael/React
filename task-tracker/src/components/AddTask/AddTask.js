import { React, useState } from 'react';

const AddTask = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  return (
    <div className='add-form'>
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
        <input type='checkbox' value={reminder} onChange={(e) => {setReminder(e.currentTarget.checked)}}></input>
      </div>
      <input className='btn btn-block' type='submit' value='Save Task'></input>
    </div>
  )
};

AddTask.propTypes = {};

AddTask.defaultProps = {};

export default AddTask;
