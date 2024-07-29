import styled from "styled-components";

// Optional: Add some basic styling
const FeatureContainer = styled.div`
  margin: 1rem 0;
  /* padding: 0.5rem; */
  /* border-bottom: 1px solid #ddd; */
`;

const FeatureItem = styled.div`
  font-size: 1rem;
  /* margin: 0.25rem 0; */
`;

function ProductFeaturesContainer({ features }) {
  console.log("features", features);

  return (
    <div>
      <h3 style={{ marginTop: "1rem" }}>Product features</h3>
      {(features || []).map((feature, index) => (
        <FeatureContainer key={feature.id || index}>
          <FeatureItem>
            <strong>{feature.name}:</strong> {feature.value}
          </FeatureItem>
        </FeatureContainer>
      ))}
    </div>
  );
}

export default ProductFeaturesContainer;
