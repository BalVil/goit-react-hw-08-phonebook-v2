import styled from '@emotion/styled';

export const Notice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  max-width: 400px;
  margin: 0 auto;
  padding: 12px 48px 12px 12px;
  overflow: hidden;
  font-weight: 500;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  color: ${props => {
    if (props.status === 'error') {
      return 'rgb(95, 33, 32)';
    }
    if (props.status === 'warning') {
      return 'rgb(102, 60, 0)';
    }
    if (props.status === 'info') {
      return 'rgb(1, 67, 97)';
    }
    return '#2f2f2f';
  }};
  background-color: ${props => {
    if (props.status === 'error') {
      return 'rgb(253, 237, 237)';
    }
    if (props.status === 'warning') {
      return 'rgb(255, 244, 229)';
    }
    if (props.status === 'info') {
      return 'rgb(229, 246, 253)';
    }
    return 'rgb(243, 246, 249)';
  }};
`;

export const Icon = styled.svg`
  user-select: none;
  width: 2em;
  height: 1.4em;
  fill: currentColor;
  flex-shrink: 0;
  font-size: inherit;
`;
