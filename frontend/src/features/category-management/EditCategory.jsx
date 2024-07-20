import { useLocation } from "react-router-dom";
import CategoryForm from "../../ui/CategoryForm";
import useUpdateCategory from "./useUpdateCategory";

function EditCategory() {
  const location = useLocation();
  let categoryToEdit = location.state;
  // console.log(categoryToEdit.categoryToEdit);
  categoryToEdit = categoryToEdit.categoryToEdit;
  // console.log(categoryToEdit);
  const { updateCategory } = useUpdateCategory();
  const handleFormSubmit = (data, categoryId) => {
    const file = data.photo[0];
    const categoryData = {
      categoryName: data?.categoryName || null,
      description: data?.categoryDescription || null,
      enabled: data?.enabled ?? false, // Use nullish coalescing to handle undefined and null
      image: file?.name || null,
      categoryId: categoryId ?? null, // Use nullish coalescing to handle undefined and null
    };
    // console.log(data);
    // console.log(categoryData);
    // console.log(categoryId);
    updateCategory(categoryData);
  };
  return (
    <CategoryForm
      title={"Edit Category"}
      categoryToEdit={categoryToEdit}
      onSubmit={handleFormSubmit}
      formType={"edit"}
    />
  );
}

export default EditCategory;
