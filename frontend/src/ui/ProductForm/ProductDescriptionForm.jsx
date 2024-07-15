import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import styled from "styled-components";
import AddButton from "../AddButton";
import CancelButton from "../CancelButton";
import {
  Description,
  ShortDescription,
  StyledButtons,
} from "../AdminFormStyles";

// const ShortDescription = styled.div`
//   margin-bottom: 1rem;
// `;
// const Description = styled.div`
//   margin-top: 1rem;
// `;
// const StyledButtons = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   margin-top: 1.5rem;
// `;

function ProductDescriptionForm() {
  const editor = useRef(null);
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");

  const onCancel = () => {
    setShortDescription("");
    setDescription("");
  };

  const createNew = () => {
    console.log("description", description);
  };
  return (
    <div
      style={{
        margin: "1rem auto 1rem auto",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ShortDescription>
        <label>Short Description</label>
        <JoditEditor
          ref={editor}
          value={shortDescription}
          onChange={(newContent) => setShortDescription(newContent)}
        />
      </ShortDescription>
      <Description>
        <label>Description</label>
        <JoditEditor
          ref={editor}
          value={description}
          onChange={(newContent) => setDescription(newContent)}
        />
      </Description>
      <StyledButtons>
        <AddButton buttonText="Save" createNew={createNew} />
        <CancelButton buttonText="Cancel" handleCancel={onCancel} />
      </StyledButtons>
    </div>
  );
}

export default ProductDescriptionForm;
