import styled from "styled-components";
import {device} from "../../constants/ui";

export const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  font-size: ${(props) => props.fontSize || "20px"};
  padding: 1rem;
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  cursor: pointer;

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 20rem;
  }

  @media ${device.laptop} {
    width: 40rem;
  }
`;
