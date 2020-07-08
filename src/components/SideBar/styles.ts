import styled from 'styled-components';

import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`;

export const SerachWrappper = styled.div`
  width: min(399px, 100%);
  max-height: 57px;

  padding: 10px 24px;
  background-color: var(--primary);

  position: fixed;
  z-index: 2;
  top: 0;
`;

export const SaerchInput = styled.input`
  width: 100%;
  height: 39px;

  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background-color: var(--search);

  font-size: 14px;
  outline: 0;

  transition: 200ms;

  &:focus {
    border: 1px solid var(--twitter);
    background: var(--white);

    ~ svg {
      fill: var(--twitter);
    }
  }

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    z-index: 1;
    top: -33px;
    left: 15px;

    transition: 200ms;
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding: 57px 24px 200px;
  margin-top: 3px;

  > div + div {
    margin-top: 15px;
  }
`;
