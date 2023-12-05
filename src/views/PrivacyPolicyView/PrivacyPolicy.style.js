import styled from "styled-components";

export const Content = styled.div`
  padding: 5%;
  text-align: justify;
`;
export const OlNumber = styled.ol`
  list-style-type: decimal;
  list-style-position: inside;
`;
export const OlAlfa = styled.ol`
  list-style-type: lower-alpha;
  list-style-position: inside;
`;
export const Text = styled.p`
  &::first-letter {
    color: ${(p) => p.theme.colors.accentHoverLink};
    font-size: 150%;
  }
`;
export const Link = styled.a`
  color: ${(p) => p.theme.colors.accent};
  :hover,
  :focus {
    color: ${(p) => p.theme.colors.accentHoverLink};
  }
`;
