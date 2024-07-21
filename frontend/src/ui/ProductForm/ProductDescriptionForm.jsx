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

function ProductDescriptionForm({ formType, onSubmit }) {
  const editor = useRef(null);
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");

  const onCancel = () => {
    setShortDescription("");
    setDescription("");
  };

  const createNew = () => {
    onSubmit({ shortDescription, description });
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
