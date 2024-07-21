import ProductDescriptionForm from "../../ui/ProductForm/ProductDescriptionForm";

function AddProductDescriptionForm() {
  const handleProductDescriptionForm = (data) => {
    const descriptionData = {
      shortDescription: data?.shortDescription || "",
      description: data?.description || "",
    };
    console.log(descriptionData);
  };
  return (
    <ProductDescriptionForm
      formType={"add"}
      onSubmit={handleProductDescriptionForm}
    />
  );
}

export default AddProductDescriptionForm;
