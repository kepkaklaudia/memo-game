export const RadioBox = ({ name }) => (
  <div>
    <input type="radio" name={name} id={name} value={name} />
    <label htmlFor={name}>{name}</label>
  </div>
);