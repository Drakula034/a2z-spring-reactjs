import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Import a theme for the grid
import { useEffect, useMemo, useState } from "react";
import useGetUsersByPage from "../features/users-management/useGetUsersByPage";
import styled from "styled-components";
import { RiFileEditFill } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { MdDelete } from "react-icons/md";

// const StyledTable = styled.div`
//   /* Add gap between grid items */
//   height: 100%; /* Ensure it takes full height of the parent container */
//   width: 100%; /* Ensure it takes full width of the parent container */
// `;
const Container = styled.div`
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  height: 65vh; /* Total height of the grid container */
  width: 100vw;
`;
const RectangularPhotoIcon = styled(IoMdPerson)`
  width: 4rem; /* Adjust width as needed */
  height: 5rem; /* Adjust height as needed */
  margin-top: 5px;
  border-radius: 8px; /* Rounded corners */
`;
const CustomizeEditIcon = styled(RiFileEditFill)`
  width: 2rem;
  height: 2rem;
  color: var(--color-green-500);
  margin-top: 15px;
  margin-left: 3px;
`;
const EditIconRenderer = () => {
  //   return <RiFileEditFill size={"2rem"} color={"green"} />;
  return <CustomizeEditIcon />;
};

const AddPhotoIfNotFound = () => {
  //   return <IoMdPerson height={"5rem"} width={"5rem"} />;
  return <RectangularPhotoIcon />;
};
const ROW_HEIGHT = "100px";
function Table() {
  //   const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "65vh", width: "100vw" }), []);
  const [colDefs] = useState([
    { field: "userId", headerName: "User ID", flex: 0.5 },
    {
      field: "photos",
      headerName: "Photo",
      cellRenderer: AddPhotoIfNotFound,
      flex: 1,
    },
    { field: "email", headerName: "Email", flex: 2 },
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "enabled", headerName: "Enabled", flex: 1 },
    {
      field: "roles",
      headerName: "Roles",
      valueGetter: (params) =>
        params.data.roles.map((role) => role.name).join(", "),
      flex: 1,
    },
    {
      field: "editable",
      headerName: "",
      cellRenderer: EditIconRenderer,
      flex: 1,
    },
  ]);

  const [rowData, setRowData] = useState([]);
  const { data, isLoading, isError } = useGetUsersByPage(1);

  useEffect(() => {
    if (data) {
      setRowData(data);
    }
  }, [data]);
  //   console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;
  const cellStyle = { textAlign: "center" };

  return (
    <div style={gridStyle} className="ag-theme-alpine">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        rowHeight={ROW_HEIGHT}
        defaultColDef={{ cellStyle }}
        //   frameworkComponents={{ editIconRenderer: EditIconRenderer }} // Register the custom cell renderer
      />
    </div>
  );
}

export default Table;
