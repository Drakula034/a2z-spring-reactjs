import styled from "styled-components";

export const StyledForm = styled.form`
  border: 1px solid var(--color-grey-300);
  margin: 2rem 10rem;
  z-index: 2;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  row-gap: 0.5rem;
  font-family: "IBM Plex Sans", sans-serif;
`;
export const Title = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  margin: 1rem;
`;

export const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const ShortDescription = styled.div`
  margin-bottom: 1rem;
`;
export const Description = styled.div`
  margin-top: 1rem;
`;

export const StyledEnabled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 1rem;
  justify-items: start; /* Align items vertically to the center */
  width: 80%;

  label {
    grid-column: 1;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  input {
    grid-column: 2; /* Explicitly place input in the second column */
    padding: 0.5rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 4px;
    width: 10%; /* Adjust width to fill the container */

    /* justify-self: start; */
    /* align-self: start; */
    /* accent-color: var(--color-green-400); */

    &:checked {
      background-color: white;
      accent-color: var(--color-green-400);
    }
  }
`;

export const StyledSelectCategory = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 1rem;
  align-items: center;
  width: 80%; /* Ensure the input takes up the full available width */
  margin-bottom: 1rem;

  label {
    grid-column: 1 / span 1;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  .select-category {
    grid-column: 2 / span 1;
    /* width: max-content; */
  }
`;

export const StyledInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 1rem;
  align-items: center;
  width: 80%; /* Ensure the input takes up the full available width */
  margin-bottom: 1rem;

  label {
    grid-column: 1 / span 1;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  input {
    grid-column: 2 / span 1;
    padding: 0.5rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 4px;
    width: 80%; /* Adjust width to 100% to fill the container */
  }
`;
export const StyledLogoInput = styled(StyledInput)`
  grid-template-columns: 1fr 2fr 1fr;
  img {
    grid-column: 3 / -1;
    width: 10rem;
    height: 5rem;
    transform: translateX(-5rem);
  }
`;

// export const StyledSelectCategory = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 3fr;
//   column-gap: 1rem;
//   align-items: center;
//   width: 80%; /* Ensure the input takes up the full available width */
//   margin-bottom: 1rem;

//   label {
//     grid-column: 1 / span 1;
//     font-weight: bold;
//     margin-bottom: 0.25rem;
//   }

//   .select-category {
//     grid-column: 2 / span 1;
//   }
// `;

export const StyledInputDescription = styled(StyledInput)`
  textarea {
    height: 10rem;
    grid-column: 2 / span 1;
    padding: 0.5rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 4px;
    width: 80%;
  }
`;

export const StyledUserName = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  align-items: start;
`;

export const StyledUserInputName = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 0.5rem;

  label {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 4px;
    width: 100%;
  }
`;

export const StyledRoles = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 1rem;

  width: 80%;
  margin-top: 1rem;

  label {
    grid-column: 1 / span 1;
    font-weight: bold;
    margin-bottom: 0.25rem;
    align-items: start;
  }

  div {
    /* grid-column: 2 / span 1; */
    display: grid;
    /* flex-direction: column; */
    grid-auto-flow: row;
    gap: 0.5rem;
    width: 90%;
  }
`;

export const StyledRole = styled.div`
  /* display: flex; */
  /* grid-template-columns: max-content max-content 1fr; */
  /* flex-direction: row; */
  display: grid;
  grid-template-columns: max-content max-content auto;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 4px;
  background-color: var(--color-white);
  /* width: 90%; */

  h3,
  h4 {
    margin: 0;
    font-weight: normal;
  }

  h3 {
    font-size: 1rem;
    color: var(--color-grey-900);
  }

  h4 {
    font-size: 0.8rem;
    color: var(--color-grey-700);
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 1px solid var(--color-grey-300);
  justify-items: center;
  align-items: center;
  /* padding: 1rem; */
`;
export const StyledImage = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-grey-300);
  margin-bottom: 10px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;
