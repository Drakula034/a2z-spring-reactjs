import styled from "styled-components";
import { useEnabledDisabledUser } from "./useEnabledDisabledUser";
import UserLayout from "./UserLayout";
import BrandsLayout from "./BrandsLayout";
import CategoriesLayout from "./CategoriesLayout";
import ProductsLayout from "./ProductsLayout";
import QuestionsLayout from "./QuestionsLayout";
import ReviewLayout from "./ReviewLayout";
import CustomersLayout from "./CustomersLayout";
import ShippingRatesLayout from "./ShippingRatesLayout";
import OrdersLayout from "./OrdersLayout";
import ArticlesLayout from "./ArticlesLayout";
import SettingsLayout from "./SettingsLayout";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, [col-start] 1fr [col-end]);
  grid-template-rows: repeat(3, [row-start] 1fr [row-end]);
  margin: 3rem;
  column-gap: 1.5rem;
  row-gap: 0.5rem;
  height: 80vh;
  width: 90vw;
`;
const General_Information = styled.div`
  grid-column: col-start 1 / col-end 2;
  grid-row: row-start 1 / row-end 1;
  background-color: green;
`;
const Users = styled.div`
  grid-column: col-start 3 / col-end 3;
  grid-row: row-start 1 / row-end 1;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Categories = styled.div`
  grid-column: col-start 4 / col-end 4;
  grid-row: row-start 1 / row-end 1;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
const Brands = styled.div`
  grid-column: col-start 5 / col-end 5;
  grid-row: row-start 1 / row-end 1;
  /* background-color: red; */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Products = styled.div`
  grid-column: col-start 1 / col-end 1;
  grid-row: row-start 2 / row-end 2;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
const Questions = styled.div`
  grid-column: col-start 2 / col-end 2;
  grid-row: row-start 2 / row-end 2;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Reviews = styled.div`
  grid-column: col-start 3 / col-end 3;
  grid-row: row-start 2 / row-end 2;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Customers = styled.div`
  grid-column: col-start 4 / col-end 4;
  grid-row: row-start 2 / row-end 2;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ShippingRate = styled.div`
  grid-column: col-start 5 / col-end 5;
  grid-row: row-start 2 / row-end 2;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Orders = styled.div`
  grid-column: col-start 1 / col-end 1;
  grid-row: row-start 3 / row-end 3;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
const Articles = styled.div`
  grid-column: col-start 2 / col-end 2;
  grid-row: row-start 3 / row-end 3;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
const Settings = styled.div`
  grid-column: col-start 3 / col-end 3;
  grid-row: row-start 3 / row-end 3;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
function Layout() {
  const { data, isLoading: isUserLoading, error } = useEnabledDisabledUser();
  // data = JSON.parse(data);
  // console.log(data);
  const enabled = data?.enabled;
  const disabled = data?.disabled;
  // console.log(enabled);
  // console.log(disabled);

  return (
    <Container>
      <General_Information>Information</General_Information>
      <Users>
        <UserLayout enabled={enabled} disabled={disabled} />
      </Users>
      <Categories>
        <CategoriesLayout />
      </Categories>
      <Brands>
        <BrandsLayout />
      </Brands>
      <Products>
        <ProductsLayout />
      </Products>
      <Questions>
        <QuestionsLayout />
      </Questions>
      <Reviews>
        <ReviewLayout />
      </Reviews>
      <Customers>
        <CustomersLayout />
      </Customers>
      <ShippingRate>
        <ShippingRatesLayout />
      </ShippingRate>
      <Orders>
        <OrdersLayout />
      </Orders>
      <Articles>
        <ArticlesLayout />
      </Articles>
      <Settings>
        <SettingsLayout />
      </Settings>
    </Container>
  );
}

export default Layout;