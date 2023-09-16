import styled from 'styled-components';

export const List = styled.ul`
  font-family: Calluna;
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
`;

export const Item = styled.li`
  background-color: rgba(248, 244, 229, 0.9);
  border: 3px solid #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const DeleteButton = styled.button`
  background-color: #ff8500;
  border: none;
  outline: none;
  border-radius: 45px;
  height: 30px;
  min-width: 80px;
  max-width: 80px;
  color: #fff;
  font-family: Calluna;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 1px;
`;
