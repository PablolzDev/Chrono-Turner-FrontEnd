import styled from "styled-components"
import React from 'react'


interface TextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}

export const Text = styled.p<TextProps>`
  color: ${props => props.color || '#4B5563'};
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: ${props => props.lineHeight || '1.5'};
  text-align: ${props => props.textAlign || 'left'};
`;

interface HeadingProps {
  color?: string;
  fontSize?: string;
  lineHeight?: string;
}

export const Heading = styled.h2<HeadingProps>`
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;
  color: ${props => props.color || '#111827'};
  line-height: ${props => props.lineHeight || '1.2'};
`;

interface SubHeadingProps {
  color?: string;
  fontSize?: string;
  lineHeight?: string;
}

export const SubHeading = styled.h3<SubHeadingProps>`
  font-size: ${props => props.fontSize || '1.5rem'};
  font-weight: bold;
  color: ${props => props.color || 'var(--accent)'};
  line-height: ${props => props.lineHeight || '1.5'};
`;

interface ButtonProps {
  backgroundColor?: string;
  hoverColor?: string;
}

export const Button = styled.a<ButtonProps>`
  display: block;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  color: white;
  background-color: ${props => props.backgroundColor || 'var(--accent)'};
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 var(--black);
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.hoverColor || 'var(--black)'};
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;