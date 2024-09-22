import React from 'react';

import { CheckCircle, Zap, Smile } from 'lucide-react';
import { ContainerChoose,TextSection,TitleChoose,Description,FeatureListChoose, FeatureItemChoose, IconWrapper, Video } from '@styles/styles';

const WhyChooseUs = () => {
  return (
    <ContainerChoose>
      <TextSection>
        <TitleChoose>Why Choose Our App</TitleChoose>
        <Description>
          In a world of complex productivity tools, our app stands out with its 
          refreshing simplicity and powerful functionality. We have reimagined task 
          management to align with your natural workflow, making productivity 
          feel effortless and even enjoyable.
        </Description>
        <FeatureListChoose>
          <FeatureItemChoose>
            <IconWrapper><CheckCircle size={24} /></IconWrapper>
            Intuitive design that adapts to your style
          </FeatureItemChoose>
          <FeatureItemChoose>
            <IconWrapper><Zap size={24} /></IconWrapper>
            Lightning-fast performance, even with large projects
          </FeatureItemChoose>
          <FeatureItemChoose>
            <IconWrapper><Smile size={24} /></IconWrapper>
            Stress-free task management that sparks joy
          </FeatureItemChoose>
        </FeatureListChoose>
      </TextSection>
      <Video>
        
      </Video>
    </ContainerChoose>
  );
};

export default WhyChooseUs;
