import styled from "styled-components";
import { spacing } from "@macndesign/monorepo-theme";
const Button = styled.button`
  background: red;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  padding: ${spacing.extraSmall} ${spacing.extraLarge};
`;
export default Button;
