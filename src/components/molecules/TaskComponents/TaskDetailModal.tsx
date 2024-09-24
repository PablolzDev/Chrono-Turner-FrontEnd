import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface TaskItem {
  id: number;
  text: string;
  description: string;
  completed: boolean;
  tag: string;
  dueDate?: string;
  reminders?: string;
}

interface TaskDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: TaskItem;
  onUpdateTask: (updatedTask: TaskItem) => void;
  onDeleteTask: (id: number) => void;
}

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--panel);
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  font-family: 'DM Sans', sans-serif;
  color: var(--black);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  color: var(--black);
  background-color: var(--card);
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  color: var(--black);
  background-color: var(--card);
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CancelButton = styled(Button)`
  background-color: var(--card);
  color: var(--black);
  border: 1px solid var(--border);

  &:hover {
    background-color: var(--border);
  }
`;

const SaveButton = styled(Button)`
  background-color: var(--accent);
  color: white;

  &:hover {
    background-color: rgba(114, 114, 189, 0.8);
  }
`;

const DeleteButton = styled(Button)`
  background-color: var(--element);
  color: white;

  &:hover {
    background-color: rgba(255, 160, 122, 0.8);
  }
`;

const StateToggle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ToggleLabel = styled.label`
  margin-left: 10px;
  font-size: 16px;
`;

const TaskDetailModal: React.FC<TaskDetailModalProps> = ({ isOpen, onClose, task, onUpdateTask, onDeleteTask }) => {
  const [editedTask, setEditedTask] = useState<TaskItem>(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({ ...prev, [name]: value }));
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(prev => ({ ...prev, completed: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateTask(editedTask);
    onClose();
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDeleteTask(task.id);
      onClose();
    }
  };

  return (
    <ModalOverlay $isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="text"
            value={editedTask.text}
            onChange={handleInputChange}
            required
          />
          <TextArea
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <Input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleInputChange}
          />
          <StateToggle>
            <input
              type="checkbox"
              checked={editedTask.completed}
              onChange={handleStateChange}
              id="taskState"
            />
            <ToggleLabel htmlFor="taskState">
              {editedTask.completed ? 'Completed' : 'In Progress'}
            </ToggleLabel>
          </StateToggle>
          <ButtonGroup>
            <CancelButton type="button" onClick={onClose}>Cancel</CancelButton>
            <SaveButton type="submit">Save Changes</SaveButton>
            <DeleteButton type="button" onClick={handleDelete}>Delete</DeleteButton>
          </ButtonGroup>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default TaskDetailModal;