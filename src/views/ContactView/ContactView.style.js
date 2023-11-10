import styled from "styled-components";

export const SectionContact = styled.section`
  padding: 5% 5% 5% 5%;
`;
export const Title = styled.h2`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.17;
  text-transform: uppercase;
`;
export const JustifyBox = styled.div`
  margin-bottom: 20px;
  text-align: justify;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const BoxError = styled.div`
  color: red;
`;
export const MapBox = styled.div`
  padding: 1%;
`;
export const TypeProject = styled.span`
  color: ${(p) => p.theme.colors.accent};
`;

export const BtnForm = styled.button`
  -webkit-box-shadow: none;
  box-shadow: none;

  width: 150px;
  margin-top: 20px;
  padding: 9px 20px;
  text-transform: uppercase;

  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.accent};
  cursor: pointer;

  :hover {
    background-color: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.accent};
  }
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    color 250ms ease-in-out;
`;
