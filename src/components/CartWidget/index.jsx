import { BsCart2 } from "react-icons/bs";
import style from "./style.module.css";

function CartWidget() {
  return (
    <div className={style.container}>
      <h3 className={style.cart}>
        <BsCart2 />
        <span className={style.subnum}>0</span>
      </h3>
    </div>
  );
}

export default CartWidget;
