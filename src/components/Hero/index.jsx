import { Button } from "react-bootstrap";
import style from "./style.module.css";

function Hero() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h3>La tienda de libros mas grande de argentina </h3>
        <p>Encontra tu proxima lectura</p>
        <Button variant="outline-info" size="lg">
          Comprar
        </Button>
      </div>
    </div>
  );
}

export default Hero;
