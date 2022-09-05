import { Label, LabelTitle, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <LabelTitle>Find contacts by name</LabelTitle>
      <FilterInput
        debounceTimeout={300}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        name="filter"
      />
    </Label>
  );
};
export default Filter;
