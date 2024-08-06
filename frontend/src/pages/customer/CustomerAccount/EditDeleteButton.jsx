import styled from "styled-components";

const ButtonContainer = styled.div`
  display: none;

  button {
    background-color: var(--color-blue-400);
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
    font-size: 0.9rem;

    &:hover {
      background-color: var(--color-blue-600);
    }
  }
`;

function EditDeleteButton() {
  return (
    <ButtonContainer className="edit-delete-buttons">
      <button>Edit</button>
      <button>Delete</button>
    </ButtonContainer>
  );
}

export default EditDeleteButton;
