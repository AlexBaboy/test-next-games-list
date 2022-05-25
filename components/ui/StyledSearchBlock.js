import styled from "styled-components";
import {device} from "../../constants/ui";

export const StyledSearchBlock = styled.div`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  font-size: ${(props) => props.fontSize || "16px"};

  @media ${device.mobileS} {
    .searchInputField {
      width: 100%;  
    }
  }

  @media ${device.tablet} {
    .searchInputField {
      width: auto;
    }
  }

  @media ${device.laptop} {

  }
`;
