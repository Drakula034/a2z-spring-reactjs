import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  /* z-index: 1; */
  grid-template-rows: auto 1fr;
  justify-items: center;
  width: 100%;
  row-gap: 1rem;
`;

export const Head = styled.div`
  background-color: grey;
  font-weight: bold;
  color: black;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Enabled = styled.div`
  color: green;
  font-weight: bold;
`;
export const Disabled = styled.div`
  color: var(--color-grey-400);
  font-weight: bold;
`;
