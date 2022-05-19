import classnames from "classnames";
import styles from "./styles.module.scss";
import { ProductContainer } from "../product/container";

export const Menu = ({ productIds, restaurantId, className }) => (
  <div className={classnames(styles.root, className)}>
    <span className={styles.menuTitle}>Menu</span>
      <ProductContainer
        productIds={productIds}
        restaurantId={restaurantId}
        className={styles.product}
      />
    ))}
  </div>
);
