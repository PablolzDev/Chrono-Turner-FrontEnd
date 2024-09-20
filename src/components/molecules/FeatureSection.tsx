import React from 'react';
import {  BrainCog , Target , WrenchIcon, LayoutDashboard  } from "lucide-react";
import {Container, MainHeading, Subtitle, LayoutWrapper, Card, CardTitle, List, ListItem, TaskIcon, ItemTitle, ItemDescription, ArrowContainer,   FeatureIcon,   
  CTAButton
} from '@styles/styles'; // Asegúrate de usar la ruta correcta


const TaskFeaturePanel = () => {
  const tasks = [
    
    { icon: "📋", title: "Review pending tasks", description: "Check before the meeting."},
    { icon: "📝", title: "Write report", description: "Report from last week." },
    { icon: "🔍", title: "Review code", description: "Check the submitted code." },
    { icon: "📅", title: "Plan projects", description: "Define next steps and assign tasks." },
    { icon: "📤", title: "Send materials", description: "Prepare and send to the client." },
    
  ];

  const features = [
    { icon: BrainCog, color: "pink", title: "Minimalist Management", description: "Simplify your workflow with an intuitive and efficient interface." },
    { icon: LayoutDashboard, color: "green", title: "Kanban Board", description: "Visualize and organize your tasks with our premium Kanban board." },
    { icon: Target, color: "red", title: "Eisenhower Method", description: "Prioritize your tasks effectively with the Eisenhower matrix method." },
    { icon: WrenchIcon, color: "gray", title: "Goal-Oriented Sections", description: "Organize your tasks and goals into different sections, focusing on what matters most to you." },
  
  ];

  return (
    <Container>
      <MainHeading>Simplifica tu día</MainHeading>
      <Subtitle>Organiza tus tareas, optimiza tu tiempo y alcanza tus metas con facilidad.</Subtitle>
      <LayoutWrapper>
        <Card>
          <CardTitle>Your Tasks</CardTitle>
          <List>
            {tasks.map((task, index) => (
              <ListItem key={index}>
                <TaskIcon>{task.icon}</TaskIcon>
                <div>
                  <ItemTitle>{task.title}</ItemTitle>
                  <ItemDescription>{task.description}</ItemDescription>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
        <ArrowContainer>
        
        </ArrowContainer>
        <Card>
          <CardTitle>Características</CardTitle>
          <List>
            {features.map((feature, index) => (
              <ListItem key={index}>
                <FeatureIcon as={feature.icon} color={feature.color} />
                <div>
                  <ItemTitle>{feature.title}</ItemTitle>
                  <ItemDescription>{feature.description}</ItemDescription>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      </LayoutWrapper>
      <CTAButton>Comienza tu prueba gratuita</CTAButton>
    </Container>
  );
};

export default TaskFeaturePanel;