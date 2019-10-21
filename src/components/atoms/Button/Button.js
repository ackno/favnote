import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.yellow || 'hsl(49, 100%, 58%)'};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  font-size: 16px;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
