import styled from '@emotion/styled';
import { DebounceInput } from 'react-debounce-input';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const LabelTitle = styled.p`
  margin-bottom: 2px;
  color: rgba(0, 0, 0, 0.54);
`;

export const FilterInput = styled(DebounceInput)`
  display: block;
  height: calc(2.5rem + 2px);
  width: 70%;
  margin-bottom: 8px;
  padding: 1rem 0.75rem;
  font-size: 1.1rem;
  line-height: 1.25;
  color: #212529;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;

  &:focus {
    background-color: rgba(0, 0, 0, 0.03);
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgba(158, 158, 158, 0.25);
  }
`;
