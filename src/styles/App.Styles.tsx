import styled from "styled-components";

export const Toggle = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  border-radius: 50%;
  box-shadow: inset 0px 0px 10px 5px rgba(255, 255, 255, 0.25), 0px 0px 5px 5px rgba(255, 255, 255, 0.25);

  background-color: var(--theme-purple);

  cursor: pointer;
`;
