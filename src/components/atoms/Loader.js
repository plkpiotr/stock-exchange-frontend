import React from 'react';
import styled, { keyframes } from 'styled-components';
import dollar from 'icons/dollar.svg';

const Rotate = keyframes`
  0% {
    transform: rotateY(0);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  animation: ${Rotate} 1s both infinite;
  position: fixed;
  top: 38px;
  left: 32px;
  z-index: 2;
  
  @media only screen and (max-height: 900px) {
    display: none;
  }
`;

const Loader = () => (
  <Logo src={dollar} alt="dollar" />
);


export default Loader;
