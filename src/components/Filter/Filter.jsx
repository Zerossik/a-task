import { StyledInput } from "./Filter.styled";
export const Filter = ({ value, handlerFilter }) => {
  return (
    <>
      <StyledInput
        name="filter"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => handlerFilter?.(e.target.value.toLowerCase())}
      />
    </>
  );
};
