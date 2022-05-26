import styled from "styled-components";
import {device} from "../../constants/ui";

export const StyledError = styled.div`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  font-size: ${(props) => props.fontSize || "36px"};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: red;

  @media ${device.mobileS} {}

  @media ${device.tablet} {}

  @media ${device.laptop} {}
`;
