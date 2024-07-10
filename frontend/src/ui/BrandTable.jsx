import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css";
import styled from "styled-components";

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

function BrandTable() {
  const [rowData] = useState([]);
  const GridStyle = useMemo(
    () => ({
      height: "65vh",
      width: "97vw",
      marginLeft: "2rem",
      marginRight: ".7rem",
    }),
    []
  );

  const [colDefs] = useState([
    { field: "id", headerName: "Brand Id", flex: 0.5 },
    { field: "Logo", headerName: "Logo", flex: 1 },
    { field: "brandName", headerName: "Brand Name", flex: 1.2 },
    {
      field: "categories",
      headerName: "Categories",
      flex: 1.5,
    },
    { field: "editable", headerName: "", flex: 1 },
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
        />
      </div>
    </GridContainer>
  );
}

export default BrandTable;
