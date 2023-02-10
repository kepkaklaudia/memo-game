import { Input } from "./styled";

export const RadioBox = ({ name, selectedItem, onChange }) => {
  const isChecked = name === selectedItem;

  return (
    <label>
      <Input
        type="radio"
        name={name}
        id={name}
        value={name}
        checked={isChecked}
        onChange={onChange}
      />
      {name}
    </label>
  );
}