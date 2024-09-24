"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const BoardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #f7f7f7;
  height: 100vh;
`;

const Column = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  width: 250px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ColumnTitle = styled.h2`
  font-size: 18px;
  color: rgb(114, 114, 189);
  text-align: center;
`;

const TaskList = styled.div`
  min-height: 200px;
  padding: 10px;
  background-color: #fafafa;
  border-radius: 8px;
`;

const Task = styled.div`
  background-color: white;
  border: 1px solid rgb(114, 114, 189);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 8px;
  color: #333;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const AddTaskButton = styled.button`
  background-color: transparent;
  border: 2px dashed rgb(114, 114, 189);
  padding: 8px;
  color: rgb(114, 114, 189);
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(114, 114, 189, 0.1);
  }
`;

const initialTasks = {
  todo: [
    { id: 'task-1', content: 'First Task' },
    { id: 'task-2', content: 'Second Task' }
  ],
  inProgress: [
    { id: 'task-3', content: 'Third Task' }
  ],
  done: []
};

const TaskBoard = () => {
  const [columns, setColumns] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const updatedTasks = Array.from(start);
      const [moved] = updatedTasks.splice(source.index, 1);
      updatedTasks.splice(destination.index, 0, moved);

      setColumns({ ...columns, [source.droppableId]: updatedTasks });
    } else {
      const startTasks = Array.from(start);
      const finishTasks = Array.from(finish);

      const [moved] = startTasks.splice(source.index, 1);
      finishTasks.splice(destination.index, 0, moved);

      setColumns({
        ...columns,
        [source.droppableId]: startTasks,
        [destination.droppableId]: finishTasks
      });
    }
  };

  return (
    <BoardContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(columns).map((columnId) => (
          <Droppable droppableId={columnId} key={columnId}>
            {(provided) => (
              <Column>
                <ColumnTitle>{columnId}</ColumnTitle>
                <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                  {columns[columnId].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <Task
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {task.content}
                        </Task>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </TaskList>
                <AddTaskButton>+ Add Task</AddTaskButton>
              </Column>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </BoardContainer>
  );
};

export default TaskBoard;
