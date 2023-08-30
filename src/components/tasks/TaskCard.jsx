import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { updateTask } from '../Redux/Features/TaskSlice';

const TaskCard = ({ task }) => {

  let dispatch = useDispatch()

  console.log(task)

  let status ;

  console.log(task.status)
  if (task.status == 'pending'){
    status = 'running'
  }
  else if (task.status == 'running'){
    status = 'finished'
  }
  else{
    status = 'archive'
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1

      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.Description}</p>
      <p className="text-sm">Assigned to - {task?.AssignTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button onClick={()=>dispatch(updateTask({id : task.id , status: status }))}  title="In progress">
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
