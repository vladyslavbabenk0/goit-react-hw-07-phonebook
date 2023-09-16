import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  padding: 10px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  margin-top: 120px;;
`;

export const Wrapper = styled.div`
  text-align: center;
  font-size: 20px;
  color: #fff;
`;

export const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  text-align: center;
  font-family: 'Calluna', sans-serif;
  font-weight: 300;
  font-size: 36px;
  letter-spacing: 10px;

  span {
    background: -webkit-linear-gradient(white, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SubTitle = styled.h2`
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`;

export const PlayerContainer = styled.div`
  text-align: center;
  position: relative;
`;

export const SoundCloudButton = styled.button`
  background-color: #ff5500;
  color: white;
  border: none;
  padding: 3px 6px;
  margin: 2px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8800;
  }
`;

export const CallToActionText = styled.div`
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: white;
  padding: 0 2px;
  font-size: 14px;
`;
