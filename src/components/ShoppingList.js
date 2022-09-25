import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All");

  function handleSelect(event) {
    console.log(event.target.value);
    setCategory(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => {
          console.log(selectedCategory);
          if (selectedCategory === "All" || item.category === selectedCategory)
            return (
              <Item key={item.id} name={item.name} category={item.category} />
            );
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
