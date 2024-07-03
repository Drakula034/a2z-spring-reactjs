import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Data, Disabled, Enabled, Head } from "./LayoutStyles";

function CustomersLayout() {
  return (
    <Container>
      <Head>Customers: 0</Head>
      <Data>
        <Enabled>Enabled: 0</Enabled>
        <Disabled>Disabled: 0</Disabled>
        <ViewAllButton />
      </Data>
    </Container>
  );
}

export default CustomersLayout;
