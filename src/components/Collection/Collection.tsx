import React from "react";
import { collectionsType } from "../../types/collections.type";
import "./style.css";
const Collection = ({ name }: collectionsType) => {
  return (
    <div className="collection">
      <div className="collection_image"></div>
      <h2 className="collection_name">{name}</h2>
    </div>
  );
};

export default Collection;
