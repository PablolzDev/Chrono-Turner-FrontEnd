import React, { useState } from 'react';
import styled from 'styled-components';

interface TaskItem {
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


interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: TaskItem) => void;
  categories: { id: string; name: string }[];
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
      name: taskName,  // Mapea `taskName` a `name`
      description,
      status_task: 0,  // Puedes establecer valores por defecto o ajustarlos según tu lógica
      status_sub_task: 0,
      category_id: '',  // Necesitas obtener este valor si es requerido
      expiration_date: dueDate,  // `dueDate` se mapea a `expiration_date`
      priority_id: priority,  // `priority` se mapea a `priority_id`
      goal_id: '',  // Puedes agregar el valor adecuado o dejarlo vacío
      user_entity_id: ''  // Lo mismo para `user_entity_id`
    });
  
    // Restablecer los campos después de agregar la tarea
    setTaskName('');
    setDescription('');
    setDueDate('');
    setPriority('');
    setReminders('');
    onClose();
  };
  

  return (
    <ModalOverlay $isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
          <TextArea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Reminders"
            value={reminders}
            onChange={(e) => setReminders(e.target.value)}
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