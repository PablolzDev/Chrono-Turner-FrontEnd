'use client'
import React, { useState } from 'react';
import Nav from '@/components/molecules/Nav';
import LeftBarComponent from '@components/molecules/TaskComponents/LeftBar';
import TaskList from '@components/molecules/TaskComponents/TaskList';

import AddTaskModal from '@components/molecules/TaskComponents/AddTaskModal';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { GlobalStyle, Header, PageContent, TaskManager, TasksWrapper, ContentCategories, Category } from '@/styles/Tasks';

const TaskManagerPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState<boolean>(false);

  const handleAddTask = (task: any) => {
    // Implementar la lógica para añadir la tarea
    console.log('Nueva tarea:', task);
    setIsAddTaskModalOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Nav />
      <TaskManager>
        <LeftBarComponent />
        <PageContent>
          <Header>Today Tasks</Header>
          <ContentCategories>
            {['All', 'Upcoming', 'Status'].map(category => (
              <Category
                key={category}
                $active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Category>
            ))}
          </ContentCategories>
          <TasksWrapper>
            <TaskList />
            <Fab size="medium" color="secondary" aria-label="add">
              <AddIcon onClick={() => setIsAddTaskModalOpen(true)} />
            </Fab>
          </TasksWrapper>
        </PageContent>
      </TaskManager>
      <AddTaskModal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </>
  );
};

export default TaskManagerPage;