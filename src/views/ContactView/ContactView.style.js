import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.17;

  text-transform: uppercase;
`;

export const TypeProject = styled.span`
  color: ${(p) => p.theme.colors.accent};
`;
