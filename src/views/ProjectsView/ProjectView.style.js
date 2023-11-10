import styled from "styled-components";

export const TypeProject = styled.span`
  color: ${(p) => p.theme.colors.accent};
`;

export const List = styled.ul`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  @media (min-width: 1070px) {
    margin: -15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
