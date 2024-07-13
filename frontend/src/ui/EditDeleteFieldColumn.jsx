import { MdDelete } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import styled from "styled-components";
import { TbFileInfo } from "react-icons/tb";
import { useState } from "react";

const CustomizeEditIcon = styled(RiFileEditFill)`
  width: 2rem;
  height: 2rem;
  color: var(--color-green-500);
  margin-top: 15px;
  margin-left: 3px;
  cursor: pointer;
`;

const CustomizedDeleteIcon = styled(MdDelete)`
  width: 2rem;
  height: 2rem;
  color: var(--color-grey-500);
  margin-top: 15px;
  margin-left: 3px;
  cursor: pointer;
`;

const CustomizedFileInfoIcon = styled(TbFileInfo)`
  width: 2rem;
  height: 2rem;
  color: var(--color-green-500);
  margin-top: 15px;
  margin-left: 3px;
  cursor: pointer;
`;
function EditDeleteFieldColumn({ onDeleteClick, onEditClick, icon }) {
  const [infoIcon, setInfoIcon] = useState(icon || false);
  return (
    <>
      <CustomizeEditIcon onClick={onEditClick} />
      <CustomizedDeleteIcon onClick={onDeleteClick} />
      {infoIcon && <CustomizedFileInfoIcon />}
    </>
  );
}

export default EditDeleteFieldColumn;
