import styled from "styled-components";
import SearchButton from "./SearchButton";
import ClearButton from "./ClearButton";
import AddButton from "./AddButton";
import { useNavigate } from "react-router-dom";

const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-right: 2rem;
`;
const Search = styled.div`
  display: grid;
  grid-template-columns: max-content min-content min-content;
  column-gap: 8px;
`;
const Label = styled.label`
  font-size: 1.1rem;
  margin-left: 2rem;
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

function ManagementSearchAndAdd({ createNew, buttonText }) {
  const navigate = useNavigate();
  //   const createNewUser = () => {
  //     navigate(`${location.pathname}/create`);
  //   };
  return (
    <StyledFeatures>
      <Search>
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

export default ManagementSearchAndAdd;
