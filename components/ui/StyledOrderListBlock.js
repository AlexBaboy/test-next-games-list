import styled from "styled-components";
import {device} from "../../constants/ui";

export const StyledOrderListBlock = styled.div`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  font-size: ${(props) => props.fontSize || "16px"};

  @media ${device.mobileS} {
    .orderListSelect {
      width: 100%;  
    }
  }

  @media ${device.tablet} {
    .orderListSelect {
      width: auto;
    }
  }

  @media ${device.laptop} {

  }
`;
