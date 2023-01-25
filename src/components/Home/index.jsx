import React from "react";
import Hero from "../Hero";
import ItemListContainer from "../ItemListContainer";

function Home() {
  return (
    <>
      <Hero />
      <ItemListContainer greeting="Lista de productos" />
    </>
  );
}

export default Home;
