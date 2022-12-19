import { useContext } from "react";
import menuItems from "../../data/items.json";
import MenuListItem from "../MenuListItem/MenuListItem";
import "./menu-list.css";
import { Context } from "../../App";

export default function MenuList() {
  const { filteredItems } = useContext(Context);

  return (
    <div id="menu" className="menu">
      <div className="menu-grid">
        {filteredItems.map((item, index) => {
          return (
            <MenuListItem
              item={item}
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={item.price}
              key={index}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
