import styled from "styled-components";
import {device} from "../../constants/ui";

export const StyledGrid = styled.div`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  font-size: ${(props) => props.fontSize || "16px"};
  padding: 10px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.5rem;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem;
  }
`;
