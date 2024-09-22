'use client'
import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { Calendar, Star, Hash, Users, Trash, Inbox } from 'lucide-react';

// Estilos globales
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
  }

  body {
    margin: 0;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    background-image: linear-gradient(21deg, rgba(64, 83, 206, 0.3697003234675773) 68%, rgba(255, 206, 196, 0.5) 163%),
                      linear-gradient(163deg, rgba(49, 146, 170, 0.07944489965716128) 86%, rgba(239, 112, 138, 0.5) 40%),
                      linear-gradient(30deg, rgba(76, 79, 173, 0.6173675716587805) 22%, rgba(237, 106, 134, 0.5) 169%),
                      linear-gradient(48deg, rgba(31, 85, 147, 0.7323890641868473) 64%, rgba(247, 126, 132, 0.5) 43%);
    background-blend-mode: overlay, multiply, color, normal;
  }
`;

// Componente principal
const TaskManager = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  height: 90vh;
  max-height: 900px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.011),
              0 0.7px 5.3px rgba(0, 0, 0, 0.016),
              0 1.3px 10px rgba(0, 0, 0, 0.02),
              0 2.2px 17.9px rgba(0, 0, 0, 0.024),
              0 4.2px 33.4px rgba(0, 0, 0, 0.029),
              0 10px 80px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

// Componentes de la barra izquierda
const LeftBar = styled.div`
  background-color: #f5f8ff;
  width: 230px;
  border-right: 1px solid #e3e7f7;
  position: relative;
`;

const LeftContent = styled.div`
  padding: 40px;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  color: #353536;
  margin-bottom: 14px;
  font-weight: 500;

  svg {
    width: 14px;
    height: 14px;
    color: currentColor;
    margin-right: 10px;
  }
`;

// Componentes del contenido central
const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px 20px 0 20px;
`;

const Header = styled.h1`
  font-size: 26px;
  color: #353536;
  margin-top: 30px;
`;

const ContentCategories = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
`;

const Category = styled.label`
  font-weight: 500;
  color: #8e92a4;
  border-bottom: 1px solid #ddd;
  transition: 0.4s ease-in;
  padding: 20px 30px;
  cursor: pointer;
`;

const TasksWrapper = styled.div`
  padding: 30px 0;
  flex: 1;
  overflow-y: auto;
  height: 100%;
  padding-right: 8px;
`;

const Task = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 16px;
  padding-left: 30px;
  color: #777982;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    transform: translatex(2px);
  }

  label {
    cursor: pointer;
  }
`;

const Tag = styled.span`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 20px;

  &.approved {
    background-color: #e0fbf6;
    color: #58c2a9;
  }

  &.progress {
    background-color: #ece7fe;
    color: #8972f3;
  }

  &.review {
    background-color: #fde7ea;
    color: #e77f89;
  }

  &.waiting {
    background-color: #f7f8fc;
    color: #a0a6b5;
  }
`;

// Componentes de la barra derecha
const RightBar = styled.div`
  width: 320px;
  border-left: 1px solid #e3e7f7;
  display: flex;
  flex-direction: column;
`;

const RightContent = styled.div`
  padding: 10px 40px;
  overflow-y: auto;
  flex: 1;
`;

const TaskBox = styled.div`
  position: relative;
  border-radius: 12px;
  width: 100%;
  margin: 20px 0;
  padding: 16px;
  cursor: pointer;
  box-shadow: 2px 2px 4px 0px rgba(235,235,235,1);

  &:hover {
    transform: scale(1.02);
  }

  &.yellow { background-color: #fff1d6; }
  &.blue { background-color: #d3e6ff; }
  &.red { background-color: #ffd9d9; }
  &.green { background-color: #daffe5; }
`;

const TaskManagerPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />
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
            </ul>
            {/* Agregar más elementos del menú aquí */}
          </LeftContent>
        </LeftBar>

        <PageContent>
          <Header>Today Tasks</Header>
          <ContentCategories>
            <Category>All</Category>
            <Category>Important</Category>
            <Category>Notes</Category>
            <Category>Links</Category>
          </ContentCategories>
          <TasksWrapper>
            <Task>
              <label>
                <input type="checkbox" checked />
                <span>Dashboard Design Implementation</span>
              </label>
              <Tag className="approved">Approved</Tag>
            </Task>
            {/* Agregar más tareas aquí */}
          </TasksWrapper>
        </PageContent>

        <RightBar>
          <RightContent>
            <TaskBox className="yellow">
              <div>08:00 - 09:00 AM</div>
              <div>Product Review</div>
              {/* Agregar miembros aquí */}
            </TaskBox>
            {/* Agregar más cajas de tareas aquí */}
          </RightContent>
        </RightBar>
      </TaskManager>
    </>
  );
};

export default TaskManagerPage;