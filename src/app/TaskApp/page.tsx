'use client'
import React, { useState } from 'react';
import Nav from '@/components/molecules/Nav';
import LeftBarComponent from '@components/molecules/TaskComponents/LeftBar';
import TaskList from '@components/molecules/TaskComponents/TaskList';
import AddTaskModal from '@components/molecules/TaskComponents/AddTaskModal';
import { GlobalStyle, Header, PageContent, TaskManager, TasksWrapper, ContentCategories, Category } from '@/styles/Tasks';

const TaskManagerPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState<boolean>(false);

  // Definir categorías
  const categories = [
    { id: '1', name: 'Work' },
    { id: '2', name: 'Personal' },
    { id: '3', name: 'Shopping' }
    // Agrega las categorías que necesites
  ];

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
          </TasksWrapper>
        </PageContent>
      </TaskManager>
      
      
      <AddTaskModal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        onAddTask={handleAddTask}
        categories={categories}  
      />
      
      
    </>
  );
};

export default TaskManagerPage;