import styled, { css } from 'styled-components';
import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;

  background: var(--primary);
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  text-align: left;

  display: flex;
  align-items: center;

  > button {
    padding: 8px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    outline: 0;
    cursor: pointer;
    transition: background-color 200ms;

    &:hover {
      background-color: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 18px;
  height: 18px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0%;

  width: 100%;

  background-color: var(--primary);
  border-top: 1px solid var(--outline);
  padding: 8px min(46px, max(10vw, 10px));

  display: flex;
  justify-content: space-between;

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconsCSS = css`
  width: 26px;
  height: 31px;

  cursor: pointer;
  fill: var(--gray);
  transition: fill 200ms;

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconsCSS}
`;

export const SearchIcon = styled(Search)`
  ${iconsCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconsCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconsCSS}
`;
