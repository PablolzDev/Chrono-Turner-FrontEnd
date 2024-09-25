"use client"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddTaskModal from './AddTaskModal';
import TaskDetailModal from './TaskDetailModal';

interface TaskItem {
  id: string;
  name: string;
  description: string;
  status_task: number;
  status_sub_task: number;
  category_id: string;
  expiration_date: string;
  priority_id: string;
  goal_id: string;
  user_entity_id: string;
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
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [categories, setCategories] = useState<{[key: string]: {name: string, colour: string}}>({});
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);

  useEffect(() => {
    fetchTasks();
    fetchCategories();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3000/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/categories');
      const data = await response.json();
      const categoriesMap = data.reduce((acc: any, category: any) => {
        acc[category.id] = { name: category.name, colour: category.colour };
        return acc;
      }, {});
      setCategories(categoriesMap);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const toggleTaskCompletion = async (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      const updatedTask = { ...task, status_task: task.status_task === 1 ? 0 : 1 };
      try {
        await fetch(`http://localhost:3000/tasks/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedTask),
        });
        setTasks(tasks.map(t => t.id === id ? updatedTask : t));
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }
  };

  const addTask = async (newTask: Omit<TaskItem, 'id'>) => {
    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });
      const addedTask = await response.json();
      setTasks(prevTasks => [...prevTasks, addedTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };
  
  const updateTask = async (updatedTask: TaskItem) => {
    try {
      await fetch(`http://localhost:3000/tasks/${updatedTask.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
      });
      setTasks(prevTasks => prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/tasks/${id}`, { method: 'DELETE' });
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
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
              checked={task.status_task === 1}
              onChange={(e) => {
                e.stopPropagation();
                toggleTaskCompletion(task.id);
              }}
            />
            <TaskText $completed={task.status_task === 1}>{task.name}</TaskText>
          </TaskInfo>
          <TaskMetadata>
            {task.expiration_date && <DueDate>{formatDate(task.expiration_date)}</DueDate>}
            <Tag style={{backgroundColor: categories[task.category_id]?.colour}}>
              {categories[task.category_id]?.name}
            </Tag>
          </TaskMetadata>
        </Task>
      ))}
      <AddTaskModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddTask={addTask}
        categories={Object.entries(categories).map(([id, cat]) => ({ id, name: cat.name }))}
      />
      {selectedTask && (
        <TaskDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          task={selectedTask}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
          categories={Object.entries(categories).map(([id, cat]) => ({ id, name: cat.name }))}
        />
      )}
    </TaskListContainer>
  );
};

export default TaskList;