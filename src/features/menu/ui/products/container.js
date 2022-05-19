import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../module/thunk/load-products";
import { Products } from "./component";
import { selectIsAllProductsExist, selectIsProductLoading } from "../../module/selectors";

export const ProductsContainer = ({ productIds, restaurantId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsProductLoading);
  const isAllProductsExist = useSelector((state) =>
    selectIsAllProductsExist(state, restaurantId)
  );

  useEffect(() => {
    dispatch(loadProducts(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <Products productIds={productIds} isAllProductsExist={isAllProductsExist} />
  );
};