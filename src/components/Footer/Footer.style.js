import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.footer`
  padding: 20px 0;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.background};
`;

export const Copy = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.black};
`;

export const Heart = styled(motion.div)`
  margin: 0 15px;
`;
