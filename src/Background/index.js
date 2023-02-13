import { Cube } from "./styled";

export const Background = () => (
  <>
    {[...Array(6)].map((value, index) =>
    (
      <Cube id={index} key={index} />
    ))}
  </>
);