import { useLocation, useNavigate } from "react-router-dom";
import AddButton from "../../ui/AddButton";
import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Data, Disabled, Enabled, Head } from "./LayoutStyles";

function CategoriesLayout({ enabled, disabled, moveToCategoryPage }) {
  const navigate = useNavigate();
  const location = useLocation();
  const viewCategory = () => {
    navigate(`${location.pathname}/categories?page=1`);
  };
  return (
    <Container>
      <Head>Categories : {enabled + disabled}</Head>
      <Data>
        <Enabled>Enabled: {enabled}</Enabled>
        <Disabled>Disabled: {disabled}</Disabled>
        <AddButton buttonText="Add Category" />
        <ViewAllButton onClick={viewCategory} onClick={moveToCategoryPage} />
      </Data>
    </Container>
  );
}

export default CategoriesLayout;
