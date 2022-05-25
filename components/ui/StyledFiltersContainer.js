import styled from "styled-components";
import {device} from "../../constants/ui";

export const StyledFiltersContainer = styled.div`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  font-size: ${(props) => props.fontSize || "16px"};
  padding: 10px;
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column;
    font-size: 1rem;
    gap: 0.2rem;
  }

  @media ${device.tablet} {
    flex-direction: row;
    font-size: 1.2rem;
    gap: 1.2rem;
  }

  @media ${device.laptop} {
    font-size: 1.6rem;
    gap: 2rem;
  }
  
  
`;
