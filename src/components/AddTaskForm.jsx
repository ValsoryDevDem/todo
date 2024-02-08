import React, { useState } from "react";

export const AddTaskForm = (props) => {
  const [text, setText] = useState("");

  const handleTextChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length > 0) {
      const task = {
        id: Date.now(),
        text: text,
      };
      props.addTask(task);
      setText("");
    }
  };

  return (
      <div className="my-4 flex justify-center">
      <form className="flex w-full max-w-md" onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="What to add to the to-do list?"
          placeholder="What to add to the to-do list?"
          value={text}
          onChange={handleTextChange}
          className="py-2 px-4 border rounded-l w-full"
        />
        <input
          type="submit"
          value="Add"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r"
        />
      </form>
    </div>
  );
};
