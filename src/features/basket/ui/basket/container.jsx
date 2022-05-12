import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { Basket } from "./component";
import { clearBasket } from '../../module/actions'
import { selectorOrderedProduct } from "../../module/selectors";

export const BasketContainer = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(selectorOrderedProduct);

  const clearBasketCallback = useCallback(() => dispatch(clearBasket()), []);

  return(
    <Basket
      products={products}
      onClearBasket = {clearBasketCallback}
      {...props} />

  )
}