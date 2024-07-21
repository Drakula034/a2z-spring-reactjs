import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css";
import styled from "styled-components";
import AddPhotoIfNotFound from "./AddPhotoIfNotFound";
import { CgProductHunt } from "react-icons/cg";
import EditDeleteFieldColumn from "./EditDeleteFieldColumn";
import DeleteConfirmation from "./DeleteConfirmation";
import { useLocation, useNavigate } from "react-router-dom";
import { TbFileInfo } from "react-icons/tb";
import useProductToggleEnabledStatus from "../features/products-management/useToggleProductEnabledStatus";
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
function ProductTable({ rowData }) {
  const navigate = useNavigate();
  const location = useLocation();
  const gridStyle = useMemo(
    () => ({
      height: "65vh",
      width: "97vw",
      marginLeft: "2rem",
      marginRight: ".7rem",
    }),
    []
  );

  const [isOpen, setIsOpen] = useState(false);
  const [icon] = useState(true);

  const [productIdName, setProductIdName] = useState({
    productId: null,
    productName: null,
  });

  const { togglingProductStatus } = useProductToggleEnabledStatus();

  const handleProductEnabledTogglingStatus = (productId) => {
    console.log(productId);
    togglingProductStatus(productId);
  };

  const selectDeleteIcon = (productId, productName) => {
    setProductIdName({ productId: productId, productName: productName });
    // console.log(productIdName);
    setIsOpen(true);
  };

  const [colDefs] = useState([
    { field: "productId", headerName: "ID", flex: 0.5 },
    {
      field: "image",
      headerName: "Image",
      cellRenderer: () => <AddPhotoIfNotFound icon={<CgProductHunt />} />,
      flex: 1,
    },
    { field: "productName", headerName: "Name", flex: 3 },
    { field: "brandName", headerName: "Brand", flex: 0.5 },
    { field: "categoryName", headerName: "Category", flex: 1 },
    {
      field: "enabled",
      headerName: "Enabled",
      flex: 1,
      editable: true,
      cellRenderer: ({ data }) => (
        <input
          type="checkbox"
          checked={data.enabled}
          onChange={() => handleProductEnabledTogglingStatus(data.productId)}
        />
      ),
    },

    {
      field: "editable",
      headerName: "",
      flex: 1,
      cellRenderer: (params) => {
        return (
          <EditDeleteFieldColumn
            onDeleteClick={() =>
              selectDeleteIcon(params.data.productId, params.data.productName)
            }
            onEditClick={() => {
              const productId = params.data.productId;
              //   const categoryToEdit = params.data;
              const url = location.pathname;
              navigate(`${url}/edit?productId=${productId}`, {
                // state: { categoryToEdit },
              });
            }}
            icon={icon}
          />
        );
      },
    },
  ]);
  const cellStyle = { textAlign: "center", border: "none" };
  const onClose = () => {
    setIsOpen(false);
  };
  const onConfirm = () => {
    setIsOpen(false);
  };
  return (
    <GridContainer>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          columnDefs={colDefs}
          rowData={rowData}
          rowHeight={ROW_HEIGHT}
          defaultColDef={{ cellStyle }}
        />
      </div>
      <DeleteConfirmation
        open={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
        id={productIdName.productId}
        name={productIdName.productName}
      />
    </GridContainer>
  );
}

export default ProductTable;
