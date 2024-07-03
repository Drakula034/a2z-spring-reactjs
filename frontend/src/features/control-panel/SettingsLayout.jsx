import { Container, Data, Enabled, Head } from "./LayoutStyles";

function SettingsLayout() {
  return (
    <Container>
      <Head>Settings</Head>
      <Data>
        <Enabled>Countries</Enabled>
        <Enabled>State:0</Enabled>
      </Data>
    </Container>
  );
}

export default SettingsLayout;
