import styled from 'styled-components';

export const Form = styled.form`
  width: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: #fff;
  text-align: left;
  font-family: 'lato', sans-serif;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 5px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  margin-left: 28px;
  border-width: 1px;
  font-size: 18px;
  border-radius: 20px;
  width: 400px;
  height: 40px;
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 40px;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 10px 25px;
  font-size: 18px;
  font-family: 'Calluna', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  background-color: #6609e0;
  line-height: 42px;
  padding: 0;
  border: none;
  margin-top: 10px;
`;
