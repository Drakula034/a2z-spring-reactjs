import BrandForm from "../../ui/BrandForm";
import useAddNewBrand from "./useAddNewBrand";

function AddBrand() {
  const { addNewBrand } = useAddNewBrand();
  const handleAddBrandSubmit = (data) => {
    const file = data?.brandLogo[0];
    const categoriesList = data?.brandCategories.map((category) => ({
      categoryName: category.label,
    }));
    const brandData = {
      name: data?.brandName,
      logo: file?.name || null,
      categories: categoriesList || [],
    };
    // console.log("data", brandData);
    addNewBrand(brandData);
  };
  return (
    <BrandForm
      title={"Add Brand"}
      formType={"add"}
      onSubmit={handleAddBrandSubmit}
    />
  );
}

export default AddBrand;
