import { useQuery } from "react-query";
import { getEnabledDisabledCategory } from "../../services/api/product-service/category";

export default function useCategoryEnabledDisabled() {
  const query = useQuery("enabledDisabledCategory", () =>
    getEnabledDisabledCategory()
  );

  return query;
}
