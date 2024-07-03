import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Data, Head } from "./LayoutStyles";

function ReviewLayout() {
  return (
    <Container>
      <Head>Reviews: 0</Head>
      <Data>
        <div>Products: 0</div>
        <div>Reviews: 1</div>
        <ViewAllButton />
      </Data>
    </Container>
  );
}

export default ReviewLayout;
