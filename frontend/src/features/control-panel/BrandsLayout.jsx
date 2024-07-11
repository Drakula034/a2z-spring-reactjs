import { useLocation, useNavigate } from "react-router-dom";
import AddButton from "../../ui/AddButton";
import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Head } from "./LayoutStyles";

function BrandsLayout({ totalBrandCount, moveToBrandsPage }) {
  const navigate = useNavigate();
  const location = useLocation();
  const createNew = () => {
    navigate(`${location.pathname}/brands/create`);
  };
  return (
    <Container>
      <Head>Brands : {totalBrandCount}</Head>
      <AddButton buttonText={"Add Brand"} createNew={createNew} />
      <ViewAllButton onClick={moveToBrandsPage} />
    </Container>
  );
}

export default BrandsLayout;
