import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Data, Disabled, Enabled, Head } from "./LayoutStyles";

function QuestionsLayout() {
  return (
    <Container>
      <Head>Questions: 0</Head>
      <Data>
        <Enabled>Approved: 0</Enabled>
        <Disabled>UnApproved: 0</Disabled>
        <div>Answered: 0</div>
        <div>UnAnswered: 0</div>
        <ViewAllButton />
      </Data>
    </Container>
  );
}

export default QuestionsLayout;
