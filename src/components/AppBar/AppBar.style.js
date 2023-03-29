import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  padding: 0 20px;
  background: ${(p) => p.theme.colors.bg_header};
  border-bottom: 1px solid ${(p) => p.theme.colors.accent};
  @media (min-width: 750px) {
    padding: 0 80px;
  }
`;
