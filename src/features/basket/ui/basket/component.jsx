import classnames from "classnames";
import styles from "./styles.module.scss";
import { ItemBasket } from "../basket_elem/component";

export const Basket = ({ className, products, onClearBasket}) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span>Basket</span>
      <div>
        {products?.length > 0 ? (
          products.map((product) => (
            <ItemBasket
              {...product}
              key = {product.name}
            />))
        ) : (
          <span> Empty</span>
        )}
      </div>
      {products?.length > 0 && (
        <button onClick={onClearBasket}>Clear</button>
      )}
    </div>
  );
};
