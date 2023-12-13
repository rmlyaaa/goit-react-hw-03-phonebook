import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  width: 400px;
  border: 1px solid black;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  gap: 8px;
`;

export const StyledField = styled(Field)`
  width: 180px;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 4px;
`;

export const Button = styled.button`
  width: 100px;
  border: 1px solid gray;
  border-radius: 16px;
  background-color: rgb(225, 229, 230);
  cursor: pointer;
`;
