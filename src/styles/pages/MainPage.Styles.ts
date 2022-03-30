import styled from "styled-components";

export const MainPageStyled = styled.div`
  position: fixed;
  right: 0;
  top: 0;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomButton = styled.button`
  min-width: 200px;
  min-height: 70px;

  border-radius: 15px;

  background-color: var(--theme-purple);

  font-size: 32px;
  color: whitesmoke;

  cursor: pointer;
`;
