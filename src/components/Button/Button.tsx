import * as React from 'react';
import styled from 'styled-components';

interface Props {
  onClick?: () => void;
}

const ButtonRoot = styled.a`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid ${props => props.theme.text};
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: ${props => props.theme.text};
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
     color: ${props => props.theme.body};
     background-color: ${props => props.theme.text};
  }
`;

const Button: React.FC<Props> = ({ onClick, children }) => {
  return <ButtonRoot onClick={onClick}>{children}</ButtonRoot>;
};

export default Button;
