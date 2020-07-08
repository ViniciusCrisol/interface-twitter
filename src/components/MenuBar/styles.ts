import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  Rocketseat,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    left: 0;
    top: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Rocketseat)`
  width: 41px;
  height: 41px;

  > path {
    fill: var(--twitter);
  }
`;

export const MenuButtons = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  padding: 8.25px;
  outline: 0;

  transition: background 200ms;

  cursor: pointer;
  border-radius: 25px;

  > span {
    display: none;
  }

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
        color: var(--white);
      }
    }
  }

  &:hover {
    background-color: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }

  @media (min-width: 1280px) {
    padding-right: 15px;

    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
      color: var(--gray);
    }
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;

  flex-shrink: 0;
  fill: var(--gray);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const Botside = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    font-size: 14px;
    margin-left: 10px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    width: 25px;
    height: 25px;

    color: var(--white);
    margin-left: 30px;

    cursor: pointer;
    display: inline-block;

    > path {
      transition: 200ms;
    }

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
