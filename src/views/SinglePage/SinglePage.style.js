import styled from "styled-components";

export const BoxImg = styled.div`
  position: relative;
  overflow: hidden;
  max-height: 300px;
  width: 100%;
`;
export const Img = styled.img`
  background-color: ${(p) => p.theme.colors.gray};
  display: block;
  width: 100%;
  height: auto;
`;
