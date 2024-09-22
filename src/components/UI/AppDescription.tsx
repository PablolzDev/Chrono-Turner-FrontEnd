import { Description, DescriptionContainer, SpanP, Title } from '@/styles/AppDescription';
import React from 'react';




const AppDescription = () => {
  return (
    <DescriptionContainer>
      <Title>Elevate Your</Title>
      <SpanP>Productivity</SpanP>
      <Description>
        Manage your tasks with elegance and efficiency. Our minimalist application
        helps you focus on what truly matters, without distractions. Organize your
        day with clarity and style, maintaining intuitive control over your projects.
        Discover a new way of working, where simplicity meets efficiency.
      </Description>
    </DescriptionContainer>
  );
};

export default AppDescription;