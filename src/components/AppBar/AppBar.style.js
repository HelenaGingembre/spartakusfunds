import styled from "styled-components";

export const Header = styled.header`
  // position: relative;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 80px;
  padding: 0px 40px;
  align-items: center;
  justify-content: space-between;
  background: ${(p) => p.theme.colors.bg_header};
  border-bottom: 1px solid ${(p) => p.theme.colors.accent};
  @media (min-width: 750px) {
    padding: 0px 80px;
  }
`;
