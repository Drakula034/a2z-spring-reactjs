import AddButton from "../../ui/AddButton";
import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Data, Disabled, Enabled, Head } from "./LayoutStyles";

function ProductsLayout() {
  return (
    <Container>
      <Head>Product: 0</Head>
      <Data>
        <Enabled>Enabled: 0</Enabled>
        <Disabled>Disabled: 0</Disabled>
        <div>InStock: 0</div>
        <div>Out Of Stock: 0</div>
        <AddButton buttonText="Add Product" />
        <ViewAllButton />
      </Data>
    </Container>
  );
}

export default ProductsLayout;
