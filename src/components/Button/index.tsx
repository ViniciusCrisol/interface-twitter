import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  background-color: ${(props) =>
    props.outlined ? 'transparent' : 'var(--twitter)'};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  transition: background 200ms;

  &:hover {
    background-color: ${(props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-light-hover)'};
  }
`;
