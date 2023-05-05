import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: #e3dfde;
  border-radius: 1rem;
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding-inline: 20px;
  padding-block: 20px;
  box-shadow: 2px 2px 11px #888888;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

    .input-field {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      width: 100%;
    }

    label {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    input,
    select {
      font-size: 1rem;
      padding: 0.3rem;
      border: 1px solid #ccc;
      border-radius: 1rem;
      width: 100%;
    }

    input:focus,
    select:focus {
      outline: none;
      border-color: #0077ff;
    }

    span {
      color: #f00;
      font-size: 0.8rem;
      margin-top: 0.25rem;
    }
  }
`;

export const StyledButton = styled.button`
  font-weight: bold;
  background-color: #b75eeb;
  color: white;
  border: none;
  height: 30px;
  border-radius: 0.9rem;
  font-size: 13px;
  width: 30%;

  :hover {
    background-color: #7022c9;
    cursor: pointer;
  }
`;
