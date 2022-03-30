import styled, { ColorBlockData } from "styled-components";

export const TestPageStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridSpace = styled.div`
  --square-side: 100px;

  display: grid;
  grid-template-rows: ${(props: ColorBlockData) => `repeat(${props.count}, var(--square-side))`};
  grid-template-columns: ${(props: ColorBlockData) => `repeat(${props.count}, var(--square-side))`};
  column-gap: 15px;
  row-gap: 15px;

  justify-items: stretch;
  align-items: stretch;

  @media (max-width: 1000px) {
    --square-side: 50px;
  }
`;

export const ColorBlock = styled.div`
  border-radius: 20px;
  border: 5px solid ${(props) => props.theme.fontColor};

  cursor: pointer;

  @media (max-width: 1000px) {
    --square-side: 50px;
    border-radius: 10px;
  }
`;

export const NextButton = styled.button`
  position: fixed;
  bottom: 50px;
  min-width: 200px;
  min-height: 70px;

  border-radius: 15px;

  background-color: var(--theme-purple);

  font-size: 32px;
  color: whitesmoke;

  cursor: pointer;
`;

export const Text = styled.p`
  position: fixed;
  top: 10px;
  font-size: 32px;
`;
