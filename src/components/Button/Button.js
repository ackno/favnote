import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${({ secondary }) => (secondary ? '#E6E6E6' : '#FFD82B')};
  width: ${({ secondary }) => (secondary ? '105px' : '220px')};
  height: ${({ secondary }) => (secondary ? '30px' : '47px')};
  font-size: ${({ secondary }) => (secondary ? '10px' : '16px')};
`;

export default Button;
