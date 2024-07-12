import AddButton from "../../ui/AddButton";
import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Data, Disabled, Enabled, Head } from "./LayoutStyles";

function ProductsLayout({
  enabledProducts,
  disabledProducts,
  productsInStocks,
  productsOutOfStocks,
  moveToProductsPage,
}) {
  return (
    <Container>
      <Head>Product: {enabledProducts + disabledProducts}</Head>
      <Data>
        <Enabled>Enabled: {enabledProducts}</Enabled>
        <Disabled>Disabled: {disabledProducts}</Disabled>
        <div>InStock: {productsInStocks}</div>
        <div>Out Of Stock: {productsOutOfStocks}</div>
        <AddButton buttonText="Add Product" />
        <ViewAllButton onClick={moveToProductsPage} />
      </Data>
    </Container>
  );
}

export default ProductsLayout;
