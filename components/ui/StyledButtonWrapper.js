import styled from "styled-components";

export const StyledButtonWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  font-size: ${(props) => props.fontSize || "20px"};
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem;
`;
