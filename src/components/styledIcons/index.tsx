import styled from "styled-components";
import { isMobile } from "@/design-system/MediaQuery";
import { Menu } from "styled-icons/remix-fill";
import { PaperPlane } from "styled-icons/evaicons-solid";
import { Edit } from "styled-icons/boxicons-solid";
import { Copy } from "styled-icons/boxicons-regular";
import { CloseOutline } from "styled-icons/evaicons-outline";

export const StyledContentsIconMenu = styled(Menu)`
  display: inherit;
  color: inherit;
  width: 22px;
  height: 22px;

  ${isMobile} {
    width: 18px;
    height: 18px;
  }
`;

export const StyledContentsIconPaperPlan = styled(PaperPlane)`
  display: inherit;
  color: inherit;
  width: 22px;
  height: 22px;

  ${isMobile} {
    width: 18px;
    height: 18px;
  }
`;

export const StyledContentsIconEdit = styled(Edit)`
  display: inherit;
  color: inherit;
  width: 22px;
  height: 22px;

  ${isMobile} {
    width: 18px;
    height: 18px;
  }
`;

export const StyledContentsIconEdit2 = styled(Edit)`
  display: inherit;
  color: inherit;
  width: 100%;
  height: 100%;

  ${isMobile} {
    width: 100%;
    height: 100%;
  }
`;

export const StyledContentsIconCopy = styled(Copy)`
  display: inherit;
  color: inherit;
  width: 100%;
  height: 100%;

  ${isMobile} {
    width: 100%;
    height: 100%;
  }
`;

export const StyledContentsIconClose = styled(CloseOutline)`
  display: inherit;
  color: inherit;
  width: 100%;
  height: 100%;

  ${isMobile} {
    width: 100%;
    height: 100%;
  }
`;