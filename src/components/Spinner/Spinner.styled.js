import { CgSpinner } from 'react-icons/cg';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

export const SpinWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(1turn);
}
`;

export const Spin = styled(CgSpinner)`
  animation: ${spin} 0.85s linear infinite;
`;

Spin.defaultProps = {
  size: 40,
};
