import React, {useState} from "react";

export const Task = (props) => {
  const { task, removeTask } = props;
  const [complete, setComplete] = useState(false);

  const handleRemoveClick = () => {
    removeTask(task.id);
  };

  return (
    <li className={`Task py-4 px-6 mb-4 rounded-md ${complete ? 'bg-green-200' : 'bg-gray-200'} text-center`}>
      <div className="flex justify-between items-center">
        <button
          aria-label="Complete task"
          className="complete-button text-green-500 hover:text-green-700 text-xl border-0 rounded-md bg-transparent p-1"
          onClick={()=>setComplete(true)}
        >
          &#x2713;
        </button>
        <button
          aria-label="Remove task"
          className="remove-button text-red-500 hover:text-red-700 text-xl border-0 rounded-md bg-transparent mr-2 p-1"
          onClick={handleRemoveClick}
        >
          &times;
        </button>
      </div>
      <div className="text">{task.text}</div>
    </li>
  );
};
