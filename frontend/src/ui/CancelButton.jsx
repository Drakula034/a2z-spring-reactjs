import styled from "styled-components";

const Button = styled.button`
  font-size: 0.8rem;
  font-family: "IBM Plex Sans", sans-serif;
  padding: 8px 16px;
  height: fit-content;
  width: fit-content;
  border-color: transparent;
  background-color: var(--color-grey-400);
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin: 0.3rem auto;

  &:hover {
    background-color: var(--color-grey-600);
  }
`;
function CancelButton({ buttonText, handleCancel }) {
  return <Button onClick={handleCancel}>{buttonText}</Button>;
}

export default CancelButton;
