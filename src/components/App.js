import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDark, setDark] = useState(false);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  function handleDarkClick() {
    setDark((darkMode) => !darkMode);
  }

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkClick}>
          {isDark ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
