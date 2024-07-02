import AddButton from "../../ui/AddButton";
import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Data, Disabled, Enabled, Head } from "./LayoutStyles";

function CategoriesLayout() {
  return (
    <Container>
      <Head>Categories : 0</Head>
      <Data>
        <Enabled>Enabled: 0</Enabled>
        <Disabled>Disabled: 0</Disabled>
        <AddButton buttonText="Add Category" />
        <ViewAllButton />
      </Data>
    </Container>
  );
}

export default CategoriesLayout;
