import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

export const TaskManager = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.011),
              0 0.7px 5.3px rgba(0, 0, 0, 0.016),
              0 1.3px 10px rgba(0, 0, 0, 0.02),
              0 2.2px 17.9px rgba(0, 0, 0, 0.024),
              0 4.2px 33.4px rgba(0, 0, 0, 0.029),
              0 10px 80px rgba(0, 0, 0, 0.04);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftBar = styled.div`
  background-color: #f5f8ff;
  width: 215px;
  border-right: 1px solid #e3e7f7;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e3e7f7;
  }
`;

export const LeftContent = styled.div`
  padding-top: 40px;
  margin-top: 40px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  color: #353536;
  margin-bottom: 14px;
  font-weight: 500;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
    color: currentColor;
    margin-right: 10px;
  }

  &:hover {
    color: #4f3ff0;
  }
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px 20px 0 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    padding: 20px 10px 0 10px;
    margin-top: 20px;
  }
`;

export const Header = styled.h1`
  font-size: 26px;
  color: #353536;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-top: 20px;
  }
`;

export const ContentCategories = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Category = styled.label<{ $active: boolean }>`
  font-weight: 500;
  color: ${props => props.$active ? '#4f3ff0' : '#8e92a4'};
  border-bottom: ${props => props.$active ? '2px solid #4f3ff0' : '1px solid #ddd'};
  transition: 0.4s ease-in;
  padding: 20px 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px 20px;
    margin: 5px 0;
  }
`;

export const TasksWrapper = styled.div`
  padding: 30px 0;
  flex: 1;
  overflow-y: auto;
  height: 100%;
  padding-right: 8px;
`;

export const Task = styled.div`
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

export const Tag = styled.span`
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

export const RightBar = styled.div`
  width: 320px;
  border-left: 1px solid #e3e7f7;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
    border-top: 1px solid #e3e7f7;
  }
`;

export const RightContent = styled.div`
  padding: 10px 40px;
  overflow-y: auto;
  flex: 1;
`;

export const TaskBox = styled.div`
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
