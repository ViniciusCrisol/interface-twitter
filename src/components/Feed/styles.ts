import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  border-bottom: 2px solid var(--twitter);

  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: var(--twitter);

  outline: 0;
  cursor: pointer;
  transition: background 200ms;

  &:hover {
    background-color: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
`;
