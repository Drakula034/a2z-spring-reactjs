import styled from "styled-components";

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
  background-color: gray;
`;

const Categories = styled.div`
  grid-column: col-start 4 / col-end 4;
  grid-row: row-start 1 / row-end 1;
  background-color: pink;
`;
const Brands = styled.div`
  grid-column: col-start 5 / col-end 5;
  grid-row: row-start 1 / row-end 1;
  background-color: red;
`;

const Products = styled.div`
  grid-column: col-start 1 / col-end 1;
  grid-row: row-start 2 / row-end 2;
  background-color: blue;
`;
const Questions = styled.div`
  grid-column: col-start 2 / col-end 2;
  grid-row: row-start 2 / row-end 2;
  background-color: #8f8f98;
`;

const Reviews = styled.div`
  grid-column: col-start 3 / col-end 3;
  grid-row: row-start 2 / row-end 2;
  background-color: purple;
`;

const Customers = styled.div`
  grid-column: col-start 4 / col-end 4;
  grid-row: row-start 2 / row-end 2;
  background-color: indigo;
`;

const ShippingRate = styled.div`
  grid-column: col-start 5 / col-end 5;
  grid-row: row-start 2 / row-end 2;
  background-color: violet;
`;

const Orders = styled.div`
  grid-column: col-start 1 / col-end 1;
  grid-row: row-start 3 / row-end 3;
  background: salmon;
`;
const Articles = styled.div`
  grid-column: col-start 2 / col-end 2;
  grid-row: row-start 3 / row-end 3;
  background: #464141;
`;
const Settings = styled.div`
  grid-column: col-start 3 / col-end 3;
  grid-row: row-start 3 / row-end 3;
  background-color: yellow;
`;
function Layout() {
  return (
    <Container>
      <General_Information>Information</General_Information>
      <Users>Users data</Users>
      <Categories>Categories</Categories>
      <Brands>Brands</Brands>
      <Products>Products</Products>
      <Questions>Questions</Questions>
      <Reviews>Reviews</Reviews>
      <Customers>Customers data</Customers>
      <ShippingRate>Shipping Rate</ShippingRate>
      <Orders>Orders</Orders>
      <Articles>Articles</Articles>
      <Settings>Settings</Settings>
    </Container>
  );
}

export default Layout;
