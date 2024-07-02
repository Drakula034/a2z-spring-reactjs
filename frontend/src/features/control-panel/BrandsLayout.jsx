import AddButton from "../../ui/AddButton";
import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Head } from "./LayoutStyles";

function BrandsLayout() {
  return (
    <Container>
      <Head>Brands : 0</Head>
      <AddButton buttonText={"Add Brand"} />
      <ViewAllButton />
    </Container>
  );
}

export default BrandsLayout;
