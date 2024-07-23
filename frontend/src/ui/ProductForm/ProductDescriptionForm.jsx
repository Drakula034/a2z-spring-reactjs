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
import { useNavigate } from "react-router-dom";

function ProductDescriptionForm({ onSubmit, descriptionData }) {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [shortDescription, setShortDescription] = useState(
    descriptionData?.shortDescription || ""
  );
  const [fullDescription, setFullDescription] = useState(
    descriptionData?.fullDescription || ""
  );

  const onCancel = () => {
    setShortDescription("");
    setFullDescription("");
    navigate("/admin/products");
  };

  const createNew = () => {
    onSubmit({ shortDescription, fullDescription });
    navigate("/admin/products");
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
          value={fullDescription}
          onChange={(newContent) => setFullDescription(newContent)}
        />
      </Description>
      <StyledButtons>
        <AddButton buttonText="Save" type="submit" createNew={createNew} />
        <CancelButton buttonText="Cancel" handleCancel={onCancel} />
      </StyledButtons>
    </div>
  );
}

export default ProductDescriptionForm;
