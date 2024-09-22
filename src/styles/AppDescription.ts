import styled from "styled-components";

export const DescriptionContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  margin-left: 4rem;
  padding: 2rem;
  text-align: left;

  @media (max-width: 768px) {
    margin: 2rem auto;
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  color: #333;


  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SpanP = styled.span`
  font-size: 6rem;
  color: #7272BD;
  margin-bottom: 1rem;
  display: block;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;