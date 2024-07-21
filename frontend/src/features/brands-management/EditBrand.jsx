import { useParams } from "react-router-dom";
import BrandForm from "../../ui/BrandForm";
import useUpdateBrand from "./useUpdateBrand";

function EditBrand() {
  const { updateBrand } = useUpdateBrand();
  // const { brandId } = useParams();
  const handleBrandEdit = (data, brandId) => {
    const file = data?.brandLogo[0];
    const categoriesList = data?.brandCategories.map((category) => ({
      categoryName: category.label,
    }));
    const brandData = {
      name: data?.brandName,
      logo: file?.name || null,
      categories: categoriesList || [],
    };
    // console.log(brandData);
    const numericBrandId = Number(brandId);
    if (isNaN(numericBrandId)) {
      console.error("Invalid brandId:", brandId);
      return;
    }
    // console.log(numericBrandId);
    updateBrand({ brandData, numericBrandId });
  };
  return (
    <BrandForm
      title={"Edit Brand"}
      formType={"edit"}
      onSubmit={handleBrandEdit}
    />
  );
}

export default EditBrand;
