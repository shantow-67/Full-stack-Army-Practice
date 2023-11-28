import { useState } from "react";

/* eslint-disable react/prop-types */
function CreateTask({ addNewTask }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Add your task...."
        value={text}
        style={{ padding: "0.5rem 1rem" }}
      />
      <button
        style={{ padding: "0.5rem 1rem" }}
        onClick={() => {
          if (text) {
            addNewTask(text);
            setText("");
          } else {
            alert("Invalid input");
          }
        }}
      >
        Create
      </button>
    </div>
  );
}

export default CreateTask;
