import React, { useContext } from "react";
import "./navbar.css";
import categories from "../../data/categories.json";
import menuItems from "../../data/items.json";
import { Context } from "../../App";

const Navbar = () => {
  const { filteredItems, setFilteredItems } = useContext(Context);

  function handleFilter(category) {
    if (category.toLowerCase() === "all") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(
        menuItems.filter((item) => {
          return item.category.toLowerCase() === category.toLowerCase();
        })
      );
    }
  }

  return (
    <div className="navbar">
      <h1 className="title">Our Menu</h1>

      <div>
        <ul className="nav-menu">
          {categories.map((category, index) => {
            return (
              <li
                className="nav-item"
                key={index}
                onClick={() => handleFilter(category)}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
