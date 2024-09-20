import React from 'react';
import styled from 'styled-components';
import { CheckCircle, Zap, Smile } from 'lucide-react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1650px;
  margin: 4rem auto;
  padding: 2rem;
`;

const TextSection = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #444;
`;

const IconWrapper = styled.span`
  margin-right: 1rem;
  color: #4a90e2;
`;

const VisualSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhyChooseUs = () => {
  return (
    <Container>
      <TextSection>
        <Title>Why Choose Our App</Title>
        <Description>
          In a world of complex productivity tools, our app stands out with its 
          refreshing simplicity and powerful functionality. We have reimagined task 
          management to align with your natural workflow, making productivity 
          feel effortless and even enjoyable.
        </Description>
        <FeatureList>
          <FeatureItem>
            <IconWrapper><CheckCircle size={24} /></IconWrapper>
            Intuitive design that adapts to your style
          </FeatureItem>
          <FeatureItem>
            <IconWrapper><Zap size={24} /></IconWrapper>
            Lightning-fast performance, even with large projects
          </FeatureItem>
          <FeatureItem>
            <IconWrapper><Smile size={24} /></IconWrapper>
            Stress-free task management that sparks joy
          </FeatureItem>
        </FeatureList>
      </TextSection>
      <VisualSection>
        
      </VisualSection>
    </Container>
  );
};

export default WhyChooseUs;
