import { useParams } from "react-router-dom";
import ProductImagesForm from "../../ui/ProductForm/ProductImagesForm";
import useGetProductImages from "./useGetProductImages";
import useUpdateProductImages from "./useUpdateProductImages";
function EditProductImagesForm() {
  const { productId } = useParams();

  const { data } = useGetProductImages(productId);
  const { updateProductImages } = useUpdateProductImages();

  const imagesData = {
    mainImage: data?.mainImage ?? "",
    productImages: data?.productImages || [],
  };
  // console.log(imagesData);
  // console.log(productId);
  // console.log(data);
  const handleProductImagesFormSubmit = (data) => {
    const preparedProductImagesData = {
      mainImage: data?.mainImage || "",
      productImages: (data?.additionalImages || []).map((image) => ({
        name: image.imageName || "", // Ensure 'name' matches 'ProductImageDto'
        productId: parseInt(productId, 10), // Ensure 'productId' matches 'ProductImageDto'
      })),
    };

    console.log("preparedProductImagesData", preparedProductImagesData);
    // console.log("data", data);

    updateProductImages({ data: preparedProductImagesData, productId });
  };

  return (
    <ProductImagesForm
      onSubmit={handleProductImagesFormSubmit}
      imagesData={imagesData}
    />
  );
}

export default EditProductImagesForm;
