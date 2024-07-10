import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css";
import { useMemo, useState } from "react";
import AddPhotoIfNotFound from "./AddPhotoIfNotFound";
import { MdOutlineCategory } from "react-icons/md";
import EditDeleteFieldColumn from "./EditDeleteFieldColumn";
import { Navigate, useNavigate } from "react-router-dom";
import { set } from "react-hook-form";
import DeleteConfirmation from "./DeleteConfirmation";
import styled from "styled-components";
const ROW_HEIGHT = "100px";

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
function CategoryTable({ rowData }) {
  const navigate = useNavigate();
  const [categoryIdName, setCategoryIdName] = useState({
    categoryId: null,
    categoryName: null,
  });
  const [isOpen, setIsOpen] = useState(false);
  const gridStyle = useMemo(() => ({ height: "65vh", width: "100vw" }), []);
  const selectDeleteIcon = (categoryId, categoryName) => {
    setIsOpen(true);
    setCategoryIdName({ categoryId: categoryId, categoryName: categoryName });
  };

  const onClose = () => {
    setIsOpen(false);
  };
  const onConfirm = () => {
    setIsOpen(false);
    setCategoryIdName({ id: null, categoryName: null });
  };

  const [colDefs] = useState([
    { field: "categoryId", headerName: " ID", flex: 0.5 },
    {
      field: "images",
      headerName: "Image",
      cellRenderer: (props) => {
        return <AddPhotoIfNotFound icon={<MdOutlineCategory />} />;
      },
      flex: 1,
    },
    { field: "categoryName", headerName: "Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 2 },
    {
      field: "enabled",
      headerName: "Enabled",
      flex: 1,
      defaultColDef: "false",
    },
    {
      field: "editable",
      headerName: "",
      flex: 1,
      cellRenderer: (params) => {
        return (
          <EditDeleteFieldColumn
            onDeleteClick={() =>
              selectDeleteIcon(params.data.categoryId, params.data.categoryName)
            }
            onEditClick={() => {
              const categoryId = params.data.categoryId;
              const categoryToEdit = params.data;
              const url = location.pathname;
              navigate(`${url}/edit?categoryId=${categoryId}`, {
                state: { categoryToEdit },
              });
            }}
          />
        );
      },
    },
  ]);

  // const [rowData] = useState([]);

  const cellStyle = { textAlign: "center", border: "none" };
  return (
    <GridContainer>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          columnDefs={colDefs}
          rowData={rowData}
          defaultColDef={{ cellStyle }}
          rowHeight={ROW_HEIGHT}
        />
      </div>
      <DeleteConfirmation
        open={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
        id={categoryIdName.categoryId}
        name={categoryIdName.categoryName}
      />
    </GridContainer>
  );
}

export default CategoryTable;
