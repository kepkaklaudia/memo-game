import { Input } from "./styled";

export const RadioBox = ({ name }) => (
    <label>
      <Input type="radio" name={name} id={name} value={name} />
      {name}
    </label>
);