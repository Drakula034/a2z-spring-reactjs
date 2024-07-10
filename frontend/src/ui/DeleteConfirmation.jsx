import { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 40%;
  left: 40%;
  width: 25rem;
  height: 5rem;
  background: rgba(236, 223, 223, 0.5); /* Semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background: var(--color-grey-300);
  padding: 1rem;
  border: 1px solid var(--color-grey-700);
  border-radius: 8px;
  text-align: center;
`;
const ModalButtonYes = styled.button`
  background-color: var(--color-green-400);
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: var(--color-green-400);
  }
`;

const ModalButtonNo = styled.button`
  background-color: var(--color-grey-400);
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: var(--color-grey-400);
  }
`;
function DeleteConfirmation({ open, onClose, onConfirm, id, name }) {
  if (!open) return null;

  return (
    <ModalOverlay>
      <ModalContent className="modal-content">
        <h2>
          Are you sure you want to delete this user with id: {id} and name:
          {name}
        </h2>
        <ModalButtonYes onClick={onConfirm}>Yes</ModalButtonYes>
        <ModalButtonNo onClick={onClose}>No</ModalButtonNo>
      </ModalContent>
    </ModalOverlay>
  );
}

export default DeleteConfirmation;
