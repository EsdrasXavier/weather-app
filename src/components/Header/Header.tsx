import * as React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const HeaderRoot = styled.header`
  margin-bottom: 2vh;
  height: 8vh;
  width: 100vw;
  background: ${props => props.theme.header};
  box-shadow: 0px 3px 8px ${props => props.theme.header};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & a {
    position: fixed;
    right: 2vw;
    top: 2vh;
  }
`;

interface Props {
  onThemeChange: () => void;
}

const Header: React.FC<Props> = ({ onThemeChange }) => {
  return (
    <HeaderRoot>
      <h1>Weather App</h1>
      <Button onClick={onThemeChange}>Change Theme</Button>
    </HeaderRoot>
  );
};

export default Header;
