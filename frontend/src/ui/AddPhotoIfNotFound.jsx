import styled from "styled-components";

// const RectangularPhotoIcon = styled(IoMdPerson)`
//   width: 4rem; /* Adjust width as needed */
//   height: 5rem; /* Adjust height as needed */
//   margin-top: 5px;
//   border-radius: 8px; /* Rounded corners */
// `;
const RectangularPhotoIcon = styled.div`
  width: 4rem; /* Adjust width as needed */
  height: 5rem; /* Adjust height as needed */
  margin-top: 5px;
  border-radius: 8px; /* Rounded corners */
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
function AddPhotoIfNotFound({ icon }) {
  return <RectangularPhotoIcon>{icon}</RectangularPhotoIcon>;
}

export default AddPhotoIfNotFound;
