import React from "react";
import Hero from "../../components/Hero";
import ItemListContainer from "../../components/ItemListContainer";

function Home() {
  return (
    <>
      <Hero />
      <ItemListContainer greeting="Lista de productos" />
    </>
  );
}

export default Home;
