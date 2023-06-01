import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  @keyframes pulse-animation {
    0% {
      transform: scale(1);
      color: blue;
    }
    50% {
      transform: scale(1.1);
      color: white;
      background-color: orangered;
    }
    100% {
      transform: scale(1);
      color: blue;
    }
  }
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  animation: pulse-animation 2s infinite;
  color: black;
  font-weight: 500;
  // display: inline-block;
  // padding: 0 2px;
  // margin-left: auto;
  // margin-right: auto;
  // font-size: 16px;
  // color: #4285f4;
  // text-decoration: none;
  // animation: pulse-animation 2s infinite;
  // border-radius: 5px;
`;
