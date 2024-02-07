import React from "react";
import { collectionsType } from "../../types/collections.type";
import Collection from "../Collection";
import "./style.css";
import { collections } from "../../constant/collections";

const Collections = () => {
  return (
    <div className="collections">
      {collections.map((collection) => (
        <Collection
          key={collection.id}
          id={collection.id}
          name={collection.name}
          image={collection.image}
          link={collection.link}
        />
      ))}
    </div>
  );
};

export default Collections;
