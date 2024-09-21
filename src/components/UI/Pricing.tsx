import styled from "styled-components"
import React from 'react'


export const Text = styled.p`
color: ${props => props.color || '#4B5563'};
font-size: ${props => props.fontSize || '1rem'};
font-weight: ${props => props.fontWeight || 'normal'};
line-height: ${props => props.lineHeight || '1.5'};
text-align: ${props => props.textAlign || 'left'};
`


export const Heading = styled.h2`
  font-weight: bold;
`

export const SubHeading = styled.h3`
  font-weight: semibold;
  color: var(--accent);
`

export const Button = styled.a`
  display: block;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  color: white;
  background-color:var(--accent);
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 var(--black);;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--black);
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`
