import PropTypes from 'prop-types';
import Task from '../Task/Task';

const Tasks = ({tasks, onDelete}) => {
  return (
    <div>
      {tasks.map((task) => {
          return <Task key={task.id} task={task} onDelete={onDelete}/>
      })}
    </div>
  )
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func
};

Tasks.defaultProps = {};

export default Tasks;
