import CategoryForm from "../../ui/CategoryForm";
import useAddNewCategory from "./useAddNewCategory";

function AddCategory() {
  const { addNewCategory } = useAddNewCategory();
  const handleCreateCategory = (data) => {
    const file = data.photo[0];

    const categoryData = {
      categoryName: data.categoryName,
      description: data.categoryDescription,
      enabled: data.enabled,
      image: file.name,
    };
    // console.log("data", data);
    // console.log(categoryData);

    addNewCategory(categoryData);
  };
  return (
    <CategoryForm title={"Add Category"} onSubmit={handleCreateCategory} />
  );
}

export default AddCategory;
