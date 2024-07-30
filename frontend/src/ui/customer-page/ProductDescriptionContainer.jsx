import styled from "styled-components";
import ProductDescription from "../ProductDescription";
import ProductFeaturesContainer from "../ProductFeaturesContainer";

const Container = styled.div`
  margin-top: 10px;

  h4 {
    color: var(--color-grey-900);
    margin-top: 5px;
    span {
      color: var(--color-grey-500);
    }
  }
`;
function ProductDescriptionContainer({
  productShortDescription,
  productOverViewData,
  productListDetailsDto,
}) {
  const currencySymbol = "₹";
  // console.log("productListDetailsDto", productListDetailsDto);
  // console.log("productOverViewData", productOverViewData);
  // console.log("productShortDescription", productShortDescription);
  const {
    discountPercent,
    price: mrp,
    brandName,
    categoryName,
    enabled,
    inStock,
  } = productOverViewData || {};
  return (
    <Container>
      <h2>{productOverViewData?.name}</h2>
      <h4>
        Brand: <span>{brandName}</span>
      </h4>
      <h4>
        Category: <span>{categoryName}</span>
      </h4>
      <h4>
        {discountPercent * -1}%{" "}
        <span>
          {" "}
          {currencySymbol} {mrp * (1 - discountPercent / 100)}
        </span>
      </h4>
      <h4>
        MRP:{" "}
        <span
          style={{
            textDecorationLine: "line-through",
            textDecorationStyle: "solid",
          }}
        >
          {currencySymbol + mrp}
        </span>
      </h4>
      <div
        style={{ color: "green", border: "1px solid var(--color-grey-500)" }}
      ></div>
      <ProductFeaturesContainer features={productListDetailsDto} />
      {/* Features */}
      <div
        style={{ color: "green", border: "1px solid var(--color-grey-500)" }}
      ></div>
      <ProductDescription
        title={"About This Item"}
        description={productShortDescription}
      />
    </Container>
  );
}

export default ProductDescriptionContainer;
