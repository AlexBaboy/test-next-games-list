import styled from "styled-components";
import {device} from "../../constants/ui";

export const StyledFiltersPlatformBlock = styled.div`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  font-size: ${(props) => props.fontSize || "16px"};

  @media ${device.mobileS} {
    .platformsSelect {
      width: 100%;  
    }
  }

  @media ${device.tablet} {
    .platformsSelect {
      width: auto;
    }
  }

  @media ${device.laptop} {

  }
`;
