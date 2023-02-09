import { categories } from "./constants";
import { RadioBox } from "./RadioBox";

export const Settings = () => (
  <div>
    <h2>Settings</h2>
    <h3>Category: </h3>
    {categories.map(category => (
      <RadioBox key={category} name={category} />
    ))}
  </div>
);