import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="flex-1 border border-gray-300 p-2 rounded"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default App;