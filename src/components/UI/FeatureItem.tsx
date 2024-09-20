import React from 'react'
import { FeatureItemWrapper, FeatureIcon, FeatureContent, FeatureTitle, FeatureDescription } from '@styles/styles'

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <FeatureItemWrapper>
    <FeatureIcon>{icon}</FeatureIcon>
    <FeatureContent>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureContent>
  </FeatureItemWrapper>
);

export default FeatureItem;