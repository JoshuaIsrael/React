import PropTypes from 'prop-types';
import Task from '../Task/Task';

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <div>
      {tasks.map((task) => {
          return <Task key={task.id} task={task} onDelete={onDelete} onToggle={(onToggle)}/>
      })}
    </div>
  )
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

Tasks.defaultProps = {};

export default Tasks;
