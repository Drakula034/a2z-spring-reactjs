import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css";
import styled from "styled-components";
import EditDeleteFieldColumn from "./EditDeleteFieldColumn";
import { useNavigate } from "react-router-dom";
import AddPhotoIfNotFound from "./AddPhotoIfNotFound";
import { FaAmazon } from "react-icons/fa";
const ROW_HEIGHT = "80px";
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

function BrandTable({ rowData }) {
  // const [rowData] = useState([]);
  const navigate = useNavigate();
  const GridStyle = useMemo(
    () => ({
      height: "65vh",
      width: "97vw",
      marginLeft: "2rem",
      marginRight: ".7rem",
    }),
    []
  );

  const selectDeleteIcon = () => {};

  const [colDefs] = useState([
    { field: "brandId", headerName: "Brand Id", flex: 0.5 },
    {
      field: "Logo",
      headerName: "Logo",
      flex: 1,
      cellRenderer: (props) => <AddPhotoIfNotFound icon={<FaAmazon />} />,
    },
    { field: "brandName", headerName: "Brand Name", flex: 1.2 },
    {
      field: "categories",
      headerName: "Categories",
      flex: 1.5,
      valueGetter: (params) => {
        return params.data.categories
          .map((category) => category.categoryName)
          .join(", ");
      },
      // renderCell: (params) => {
      //   return (
      //     <div>
      //       {params.data.categories.map((category) => (
      //         <span
      //           key={category.categoryId}
      //           style={{
      //             display: "inline-block",
      //             backgroundColor: "#f0f0f0",
      //             borderRadius: "5px",
      //             padding: "5px 10px",
      //             margin: "2px",
      //             color: "blue",
      //             border: "1px solid blue",
      //           }}
      //         >
      //           {category.categoryName}
      //         </span>
      //       ))}
      //     </div>
      //   );
    },
    // valueGetter: (params) => {
    //   return params.data.categories
    //     .map((category) => category.categoryName)
    //     .join(", ");
    // },
    // <div
    //   key={category.categoryId}
    //   style={{ display: "flex", direction: "row" }}
    // >
    //   {category.categoryName}
    // </div>
    // renderCell: (params) => {
    //   return <div style={{ color: "blue" }}>{params.value}</div>;
    // },

    {
      field: "editable",
      headerName: "",
      flex: 1,
      cellRenderer: (params) => {
        return (
          <EditDeleteFieldColumn
            onDeleteClick={() =>
              selectDeleteIcon(params.data.brandId, params.data.brandName)
            }
            onEditClick={() => {
              const brandId = params.data.brandId;
              // const brandToEdit = params.data;
              const url = location.pathname;
              navigate(`${url}/edit?brandId=${brandId}`, {
                // state: { categoryToEdit },
              });
            }}
          />
        );
      },
    },
  ]);
  const defaultColDef = {
    headerClass: "ag-header-cell-label",
    cellClass: "ag-cell",
    textAlign: "center",
    border: "none",
  };
  return (
    <GridContainer>
      <div style={GridStyle} className="ag-theme-alpine">
        <AgGridReact
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
          rowHeight={ROW_HEIGHT}
        />
      </div>
    </GridContainer>
  );
}

export default BrandTable;
