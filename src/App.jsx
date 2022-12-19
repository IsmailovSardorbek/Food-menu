import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MenuList from "./components/MenuList/MenuList";
import menuItems from "./data/items.json";

export const Context = React.createContext();

export default function App() {
  const [filteredItems, setFilteredItems] = useState(menuItems);

  return (
    <>
      <Context.Provider value={{ filteredItems, setFilteredItems }}>
        <Navbar />
        <MenuList />
      </Context.Provider>
    </>
  );
}
