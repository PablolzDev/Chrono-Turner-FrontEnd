import React, { useState } from 'react';
import styled from 'styled-components';

interface TaskItem {
  id?: number;
  text: string;
  description: string;
  completed: boolean;
  tag: string;
  dueDate?: string;
  priority?: string;
  reminders?: string;
}

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: Omit<TaskItem, 'id' | 'completed'>) => void;
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
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #f0f0f0;
  color: #333;
`;

const AddButton = styled(Button)`
  background-color: #007bff;
  color: white;
`;

const OptionsRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10px;
`;

const OptionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [reminders, setReminders] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask({ 
      text: taskName, 
      description, 
      tag: 'new',
      dueDate,
      priority,
      reminders
    });
    setTaskName('');
    setDescription('');
    setDueDate('');
    setPriority('');
    setReminders('');
    onClose();
  };

  return (
    <ModalOverlay $isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Task name"
            value={taskName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskName(e.target.value)}
            required
          />
          <TextArea
            placeholder="Description"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          />
          <OptionsRow>
            <OptionButton type="button" onClick={() => setDueDate(new Date().toISOString().split('T')[0])}>
              📅 Due date
            </OptionButton>
            <OptionButton type="button" onClick={() => setPriority('high')}>
              🚩 Priority
            </OptionButton>
            <OptionButton type="button" onClick={() => setReminders('1 day before')}>
              ⏰ Reminders
            </OptionButton>
          </OptionsRow>
          <ButtonGroup>
            <CancelButton type="button" onClick={onClose}>Cancel</CancelButton>
            <AddButton type="submit">Add task</AddButton>
          </ButtonGroup>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddTaskModal;