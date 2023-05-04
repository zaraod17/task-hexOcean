import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: #e3dfde;
  border-radius: 1rem;
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding-inline: 20px;
  box-shadow: 2px 2px 11px #888888;
`;

export const StyledButton = styled.button`
  font-weight: bold;
  background-color: #b75eeb;
  color: white;
  border: none;
  height: 30px;
  border-radius: 0.9rem;
  font-size: 13px;

  :hover {
    background-color: #7022c9;
    cursor: pointer;
  }
`;
