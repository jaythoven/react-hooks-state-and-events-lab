import React, { useState } from "react";

function Item({ name, category }) {
  const [isAddItem, setIsAddItem] = useState(false);
  
  function handleAddItemClick() {
    setIsAddItem((isAddItem) => !isAddItem);
  }

  return (
    <li className={isAddItem ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAddItem ? "remove" : "add"} onClick={handleAddItemClick}>{isAddItem ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
