import React, { useState } from 'react';
import { Task, Tag } from '@/styles/Tasks';

interface TaskItem {
  id: number;
  text: string;
  completed: boolean;
  tag: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 1, text: 'Dashboard Design Implementation', completed: true, tag: 'approved' },
    { id: 2, text: 'Create new prototype', completed: false, tag: 'progress' },
    // Add more tasks as needed
  ]);

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id}>
          <label>
            <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span>{task.text}</span>
          </label>
          <Tag className={task.tag}>{task.tag}</Tag>
        </Task>
      ))}
    </div>
  );
};

export default TaskList;