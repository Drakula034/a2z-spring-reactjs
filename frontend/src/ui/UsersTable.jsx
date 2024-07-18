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
import useToggleUserStatus from "../features/users-management/useToggleUserStatus";
import useDeleteByUserId from "../features/users-management/useDeleteByUserId";

const GridContainer = styled.div`
  .ag-header-cell-label {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .ag-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const RectangularPhotoIcon = styled(IoMdPerson)`
  width: 4rem; /* Adjust width as needed */
  height: 5rem; /* Adjust height as needed */
  margin-top: 5px;
  border-radius: 8px; /* Rounded corners */
`;

const ROW_HEIGHT = "100px";
function Table({ rowData }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [rowId, setRowId] = useState(null);
  const [user, setUser] = useState({ id: null, userName: null });
  const { togglingUserStatus } = useToggleUserStatus();

  const handleUserStatusToggle = (userId) => {
    togglingUserStatus(userId);
  };

  const { deletingUserByUserId } = useDeleteByUserId();

  const handleUserDeleteByUserId = (userId) => {
    deletingUserByUserId(userId);
  };

  const selectDeleteIcon = (rowId, userName) => {
    setIsOpen(true);
    // setRowId(rowId);
    setUser({ id: rowId, userName: userName });
  };

  const onConfirm = () => {
    setIsOpen(false);
    // setRowId(null);
    handleUserDeleteByUserId(user.id);
    setUser({ id: null, userName: null });
    console.log(`deleting user with name: ${user.userName} and id: ${user.id}`);
  };
  const onClose = () => {
    setIsOpen(false);
    // setRowId(null);

    setUser({ id: null, userName: null });
  };

  const gridStyle = useMemo(
    () => ({
      height: "65vh",
      width: "97vw",
      marginLeft: "2rem",
      marginRight: ".7rem",
    }),
    []
  );
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

    {
      field: "enabled",
      headerName: "Enabled",
      flex: 1,
      editable: true,
      cellRenderer: ({ data }) => (
        <input
          type="checkbox"
          checked={data.enabled}
          onChange={() => handleUserStatusToggle(data.userId)}
        />
      ),
    },

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
    <GridContainer>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          rowHeight={ROW_HEIGHT}
          defaultColDef={{ cellStyle }}
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
    </GridContainer>
  );
}

export default Table;
