import { useLocation } from "react-router-dom";
import CategoryForm from "../../ui/CategoryForm";

function EditCategory() {
  const location = useLocation();
  let categoryToEdit = location.state;
  // console.log(categoryToEdit.categoryToEdit);
  categoryToEdit = categoryToEdit.categoryToEdit;
  console.log(categoryToEdit);
  return (
    <CategoryForm title={"Edit Category"} categoryToEdit={categoryToEdit} />
  );
}

export default EditCategory;
