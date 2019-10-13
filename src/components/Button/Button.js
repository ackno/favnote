import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  text-transform: uppercase;
  background-color: #ffd82b;
  width: ${({ width }) => width || '220px'};
  height: 47px;
  font-size: 16px;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
