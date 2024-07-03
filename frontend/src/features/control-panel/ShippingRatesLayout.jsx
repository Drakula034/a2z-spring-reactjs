import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Data, Disabled, Enabled, Head } from "./LayoutStyles";

function ShippingRatesLayout() {
  return (
    <Container>
      <Head>Shipping Rates: 0</Head>
      <Data>
        <Enabled>COD Supported: 0</Enabled>
        <ViewAllButton />
      </Data>
    </Container>
  );
}

export default ShippingRatesLayout;
