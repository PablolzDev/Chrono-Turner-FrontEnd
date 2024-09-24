 import React, { useState } from 'react';
import styled from 'styled-components';
import AddTaskModal from './AddTaskModal';
import TaskDetailModal from './TaskDetailModal';

interface TaskItem {
  id: number;
  text: string;
  description: string;
  completed: boolean;
  tag: string;
  dueDate?: string;
  reminders?: string;
}

const TaskListContainer = styled.div`
  font-family: 'DM Sans', sans-serif;
  color: var(--black);
  max-width: 800px;
  margin: 0 auto;
  padding: 20px; 
`;

const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--card);
  }
`;

const TaskInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TaskText = styled.span<{ $completed: boolean }>`
  margin-left: 10px;
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
`;

const TaskMetadata = styled.div`
  display: flex;
  align-items: center;
`;

const DueDate = styled.span`
  font-size: 0.9em;
  color: var(--accent);
  margin-right: 10px;
`;

const Tag = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  
  &.approved { background-color: #d4edda; color: #155724; }
  &.progress { background-color: #fff3cd; color: #856404; }
  &.new { background-color: #cce5ff; color: #004085; }
`;

const AddTaskButton = styled.button`
  background-color: var(--accent);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  margin-bottom: 20px;
  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    background-color: rgba(114, 114, 189, 0.8);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 1, text: 'Dashboard Design Implementation', description: '', completed: true, tag: 'approved', dueDate: '2024-09-30' },
    { id: 2, text: 'Create new prototype', description: '', completed: false, tag: 'progress', dueDate: '2024-10-15' },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = (newTask: Omit<TaskItem, 'id' | 'completed'>) => {
    const id = Math.max(0, ...tasks.map(t => t.id)) + 1;
    setTasks([...tasks, { ...newTask, id, completed: false }]);
  };
  
  const updateTask = (updatedTask: TaskItem) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const openTaskDetail = (task: TaskItem) => {
    setSelectedTask(task);
    setIsDetailModalOpen(true);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <TaskListContainer>
      <AddTaskButton onClick={() => setIsAddModalOpen(true)}>Add Task</AddTaskButton>
      {tasks.map(task => (
        <Task key={task.id} onClick={() => openTaskDetail(task)}>
          <TaskInfo>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => {
                e.stopPropagation();
                toggleTaskCompletion(task.id);
              }}
            />
            <TaskText $completed={task.completed}>{task.text}</TaskText>
          </TaskInfo>
          <TaskMetadata>
            {task.dueDate && <DueDate>{formatDate(task.dueDate)}</DueDate>}
            <Tag className={task.tag}>{task.tag}</Tag>
          </TaskMetadata>
        </Task>
      ))}
      <AddTaskModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddTask={addTask}
      />
      {selectedTask && (
        <TaskDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          task={selectedTask}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
        />
      )}
    </TaskListContainer>
  );
};

export default TaskList;
