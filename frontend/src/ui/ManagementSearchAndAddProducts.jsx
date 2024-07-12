import Select from "react-select";
import styled from "styled-components";
import SearchButton from "./SearchButton";
import ClearButton from "./ClearButton";
import AddButton from "./AddButton";

const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-right: 2rem;
`;
const Search = styled.div`
  grid-column: 1 / span 1;
  display: grid;
  grid-template-columns: max-content max-content min-content min-content;
  column-gap: 8px;
`;
const Label = styled.div`
  font-size: 1.1rem;
  margin-left: 2rem;
  display: flex;
  direction: row;
  align-items: center;
`;
const Input = styled.input`
  height: 1.4rem;

  &::placeholder {
    transition: opacity 0.3s ease;
  }
  &:focus::placeholder {
    opacity: 0;
  }
`;
function ManagementSearchAndAddProducts({ buttonText, createNew }) {
  return (
    <StyledFeatures>
      <Search>
        <Label>
          <label style={{ marginRight: "0.5rem" }}>Category: </label>
          <Select
            placeholder="Category"
            options={[
              { value: "All", label: "All" },
              { value: "Electronics", label: "Electronics" },
            ]}
          />
        </Label>
        <Label>
          Filter: <Input placeholder="Keyword" />
        </Label>

        <SearchButton />
        <ClearButton />
      </Search>
      <AddButton buttonText={buttonText} createNew={createNew} />
    </StyledFeatures>
  );
}

export default ManagementSearchAndAddProducts;
