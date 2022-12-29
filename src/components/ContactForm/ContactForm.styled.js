import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const FormSection = styled.section`
  margin-top: 48px;
  text-align: center;

  @media screen and (min-width: 720px) {
    margin-top: 80px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 36px;
`;

export const FormWrap = styled.div`
  max-width: 380px;
  margin: 0 auto;
  padding: 0 12px;

  @media screen and (min-width: 450px) {
    max-width: 420px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px;
`;

export const TextField = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  margin-bottom: 0.25rem;
  padding: 1rem 0.75rem;
  color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
`;

export const Input = styled.input`
  display: block;
  height: calc(3.5rem + 2px);
  width: 100%;
  margin-bottom: 8px;
  padding: 1rem 0.75rem;
  line-height: 1.25;
  color: #212529;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    color: #212529;
    background-color: rgba(0, 0, 0, 0.03);
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);

    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }

  &:not(:placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }

  &:focus + ${Label} {
    opacity: 0.75;
    transform: scale(0.85) translateY(-0.75rem) translateX(0.15rem);
  }
  &:not(:placeholder-shown) + ${Label} {
    opacity: 0.75;
    transform: scale(0.85) translateY(-0.75rem) translateX(0.15rem);
  }
`;

export const FormButton = styled(Button)`
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  &:focus {
    outline: 1px solid #1e90ff;
  }
  &:active {
    outline: none;
    background-color: #1e90ff;
  }
`;
