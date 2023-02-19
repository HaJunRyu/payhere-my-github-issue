import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  max-width: 76.8rem;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -1px 24px rgba(0, 0, 0, 0.04);
  border-top: 0.1rem solid #ededed;
  height: 6rem;
`;

export const NavigateLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-right: 0.1rem solid #ededed;

  &:last-of-type {
    border-right: 0;
  }
`;
