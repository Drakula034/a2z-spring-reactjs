import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css";
import styled from "styled-components";
import EditDeleteFieldColumn from "./EditDeleteFieldColumn";
import { useNavigate } from "react-router-dom";
import AddPhotoIfNotFound from "./AddPhotoIfNotFound";
import { FaAmazon } from "react-icons/fa";
import DeleteConfirmation from "./DeleteConfirmation";
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
  const [isOpen, setIsOpen] = useState(false);
  const [brandIdName, setBrandIdName] = useState({
    brandId: null,
    brandName: null,
  });
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

  const selectDeleteIcon = (brandId, brandName) => {
    setBrandIdName({ brandId: brandId, brandName: brandName });
    setIsOpen(true);
  };

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
              const brandToEdit = params.data;
              const url = location.pathname;
              navigate(`${url}/edit?brandId=${brandId}`, {
                state: { brandToEdit },
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
  };
  const cellStyle = { textAlign: "center", border: "none" };

  const close = () => {
    setIsOpen(false);
  };
  const confirm = () => {
    setIsOpen(false);
  };
  return (
    <GridContainer>
      <div style={GridStyle} className="ag-theme-alpine">
        <AgGridReact
          columnDefs={colDefs}
          defaultColDef={{ defaultColDef, cellStyle }}
          rowData={rowData}
          rowHeight={ROW_HEIGHT}
        />
      </div>
      <DeleteConfirmation
        open={isOpen}
        onClose={close}
        onConfirm={confirm}
        id={brandIdName.brandId}
        name={brandIdName.brandName}
      />
    </GridContainer>
  );
}

export default BrandTable;
