import { SpinWrap, Spin } from './Spinner.styled';

const Spinner = ({ size }) => {
  return (
    <SpinWrap>
      <Spin size={size} />
    </SpinWrap>
  );
};
export default Spinner;
