import styled from "styled-components";
import {device} from "../../constants/ui";

export const StyledCard = styled.div`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  font-size: ${(props) => props.fontSize || "16px"};
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media ${device.mobileS} {
    font-size: 1rem;
    gap: 0.2rem;
  }
  
  @media ${device.tablet} {
    font-size: 1.2rem;
    gap: 0.5rem;
  }

  @media ${device.laptop} {
    font-size: 1.6rem;
    gap: 1rem;
  }
`;
