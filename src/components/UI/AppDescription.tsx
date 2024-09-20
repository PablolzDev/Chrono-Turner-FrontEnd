import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  max-width: 700px;
  margin: 3rem auto;
  margin-left: 8rem;
  padding: 2rem;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
`;

const SpanP = styled.span`
  font-size: 6rem;
  color: #7272BD;
  margin-bottom: 1rem;
`;


const AppDescription = () => {
    return (
        <DescriptionContainer>
            <Title>Elevate Your <SpanP>Productivity</SpanP></Title>
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