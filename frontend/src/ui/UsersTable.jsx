import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Import a theme for the grid
import { useEffect, useMemo, useState } from "react";
import useGetUsersByPage from "../features/users-management/useGetUsersByPage";
import styled from "styled-components";
import { RiFileEditFill } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import DeleteConfirmation from "./DeleteConfirmation";
import { useQuery } from "react-query";
import { getUserById } from "../services/api/user-services/userApi";
import { useLocation, useNavigate } from "react-router-dom";
import EditDeleteFieldColumn from "./EditDeleteFieldColumn";
import AddPhotoIfNotFound from "./AddPhotoIfNotFound";

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
// const CustomizeEditIcon = styled(RiFileEditFill)`
//   width: 2rem;
//   height: 2rem;
//   color: var(--color-green-500);
//   margin-top: 15px;
//   margin-left: 3px;
//   cursor: pointer;
// `;

// const CustomizedDeleteIcon = styled(MdDelete)`
//   width: 2rem;
//   height: 2rem;
//   color: var(--color-grey-500);
//   margin-top: 15px;
//   margin-left: 3px;
//   cursor: pointer;
// `;

// const AddPhotoIfNotFound = () => {
//   //   return <IoMdPerson height={"5rem"} width={"5rem"} />;
//   return <RectangularPhotoIcon />;
// };

// const EditDeleteFieldRenderer = ({ onDeleteClick, onEditClick }) => {
//   return (
//     <>
//       <CustomizeEditIcon onClick={onEditClick} />
//       <CustomizedDeleteIcon onClick={onDeleteClick} />
//     </>
//   );
// };
const ROW_HEIGHT = "100px";
function Table({ rowData }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [rowId, setRowId] = useState(null);
  const [user, setUser] = useState({ id: null, userName: null });
  // const userToEdit = null;
  // useEffect(() => {
  //   userToEdit = useQuery("userById", () => getUserById(userId));
  // });

  const selectDeleteIcon = (rowId, userName) => {
    setIsOpen(true);
    // setRowId(rowId);
    setUser({ id: rowId, userName: userName });
  };

  const onConfirm = () => {
    setIsOpen(false);
    // setRowId(null);
    setUser({ id: null, userName: null });
    console.log(`deleting user with id: + ${rowId} and name: ${user.userName}`);
  };
  const onClose = () => {
    setIsOpen(false);
    // setRowId(null);

    setUser({ id: null, userName: null });
  };

  const gridStyle = useMemo(() => ({ height: "65vh", width: "100vw" }), []);
  const [colDefs] = useState([
    { field: "userId", headerName: "User ID", flex: 0.5 },
    {
      field: "photos",
      headerName: "Photo",
      // cellRenderer: AddPhotoIfNotFound,
      cellRenderer: (props) => {
        return <AddPhotoIfNotFound icon={<IoMdPerson />} />;
      },
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
      cellRenderer: (params) => (
        <EditDeleteFieldColumn
          onDeleteClick={() =>
            selectDeleteIcon(params.data.userId, params.data.firstName)
          }
          onEditClick={() => {
            const userId = params.data.userId;
            const userToEdit = params.data;
            const url = location.pathname;
            navigate(`${url}/edit?userId=${userId}`, { state: { userToEdit } });
          }}
        />
      ),
      flex: 1,
      editable: true,
    },
  ]);

  //   if (isLoading) return <div>Loading...</div>;
  //   if (isError) return <div>Error loading data</div>;
  const cellStyle = { textAlign: "center", border: "none" };

  return (
    <div>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          rowHeight={ROW_HEIGHT}
          defaultColDef={{ cellStyle }}
          // frameworkComponents={{
          //   editDeleteFieldRenderer: EditDeleteFieldRenderer,
          // }}
          //   frameworkComponents={{ editIconRenderer: EditIconRenderer }} // Register the custom cell renderer
        />
      </div>
      <DeleteConfirmation
        open={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
        // user={user}
        id={user.id}
        name={user.userName}
      />
    </div>
  );
}

export default Table;
