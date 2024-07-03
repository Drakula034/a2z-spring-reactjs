import AddButton from "../../ui/AddButton";
import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Data, Enabled, Head } from "./LayoutStyles";

function ArticlesLayout() {
  return (
    <Container>
      <Head>Articles: 0</Head>
      <Data>
        <Enabled>Menu-Bound: 0</Enabled>
        <Enabled>Free: 0</Enabled>
        <AddButton buttonText="Add Article" />
        <ViewAllButton />
      </Data>
    </Container>
  );
}

export default ArticlesLayout;
