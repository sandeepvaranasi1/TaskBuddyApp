import React, { useState } from "react";

export default function TaskForm() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  return (
    <form className="task-form">
      <div id="inp">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Enter Your Task"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <span><button>Add Task</button></span>
      </div>

      <div>

      </div>
    </form>
  );
}
