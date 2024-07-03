import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Data, Enabled, Head } from "./LayoutStyles";

function OrdersLayout() {
  return (
    <Container>
      <Head>Orders: 0</Head>
      <Data>
        <Enabled>New: 0</Enabled>
        <Enabled>Delivered: 0</Enabled>
        <Enabled>Processing: 0</Enabled>
        <ViewAllButton />
      </Data>
    </Container>
  );
}

export default OrdersLayout;
