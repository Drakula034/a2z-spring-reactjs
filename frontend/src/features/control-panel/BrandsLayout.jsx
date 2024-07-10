import AddButton from "../../ui/AddButton";
import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Head } from "./LayoutStyles";

function BrandsLayout({ totalBrandCount, moveToBrandsPage }) {
  return (
    <Container>
      <Head>Brands : {totalBrandCount}</Head>
      <AddButton buttonText={"Add Brand"} />
      <ViewAllButton onClick={moveToBrandsPage} />
    </Container>
  );
}

export default BrandsLayout;
