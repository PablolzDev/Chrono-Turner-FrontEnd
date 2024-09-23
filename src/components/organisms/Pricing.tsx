import styled from "styled-components"

export const PricingCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media (min-width: 640px) {
    padding: 2.5rem;
  }
`

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    gap: 3rem;
  }
`

export const PricingSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  place-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;


  padding: 6rem 1.5rem;

  @media (min-width: 640px) {
    padding: 8rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 2rem;
  }
`

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
