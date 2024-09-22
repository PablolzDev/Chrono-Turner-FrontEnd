'use client'
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Calendar, Star, Hash, Users, Trash, Inbox, Home, Sun, Zap } from 'lucide-react';
import Nav from '@/components/molecules/Nav';
import { Category, ContentCategories, GlobalStyle, Header, LeftBar, LeftContent, MenuItem, PageContent, RightBar, RightContent, Tag, Task, TaskBox, TaskManager, TasksWrapper } from '@/styles/Tasks';



const TaskManagerPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <>
      <GlobalStyle />
      <Nav />
      <TaskManager>
        <LeftBar>
          <LeftContent>
            <ul>
              <MenuItem><Inbox />Inbox</MenuItem>
              <MenuItem><Star />Today</MenuItem>
              <MenuItem><Calendar />Upcoming</MenuItem>
              <MenuItem><Hash />Important</MenuItem>
              <MenuItem><Users />Meetings</MenuItem>
              <MenuItem><Trash />Trash</MenuItem>
              <MenuItem><Home />Family</MenuItem>
              <MenuItem><Sun />Vacation</MenuItem>
              <MenuItem><Zap />Festival</MenuItem>
            </ul>
          </LeftContent>
        </LeftBar>

        <PageContent>
          <Header>Today Tasks</Header>
          <ContentCategories>
            {['All', 'Important', 'Notes', 'Links'].map(category => (
              <Category 
                key={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Category>
            ))}
          </ContentCategories>
          <TasksWrapper>
            <Task>
              <label>
                <input type="checkbox" defaultChecked />
                <span>Dashboard Design Implementation</span>
              </label>
              <Tag className="approved">Approved</Tag>
            </Task>
            {/* ... (añade más tareas aquí) */}
          </TasksWrapper>
        </PageContent>

        <RightBar>
          <RightContent>
            <TaskBox className="yellow">
              <div>08:00 - 09:00 AM</div>
              <div>Product Review</div>
            </TaskBox>
            {/* ... (añade más cajas de tareas aquí) */}
          </RightContent>
        </RightBar>
      </TaskManager>
    </>
  );
};

export default TaskManagerPage;