import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css";
import styled from "styled-components";
import AddPhotoIfNotFound from "./AddPhotoIfNotFound";
import { CgProductHunt } from "react-icons/cg";
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
function ProductTable() {
  const gridStyle = useMemo(
    () => ({
      height: "65vh",
      width: "97vw",
      marginLeft: "2rem",
      marginRight: ".7rem",
    }),
    []
  );

  const [rowData] = useState([]);

  const [colDefs] = useState([
    { field: "productId", headerName: "ID", flex: 0.5 },
    {
      field: "images",
      headerName: "Image",
      cellRenderer: (props) => <AddPhotoIfNotFound icon={<CgProductHunt />} />,
      flex: 1,
    },
    { field: "productName", headerName: "Name", flex: 3 },
    { field: "brand", headerName: "Brand", flex: 0.5 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "enabled", headerName: "Enabled", flex: 1 },
    { field: "editable", headerName: "", flex: 1 },
  ]);
  return (
    <GridContainer>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          columnDefs={colDefs}
          rowData={rowData}
          rowHeight={ROW_HEIGHT}
        />
      </div>
    </GridContainer>
  );
}

export default ProductTable;
