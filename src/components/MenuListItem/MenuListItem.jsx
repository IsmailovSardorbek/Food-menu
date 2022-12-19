import "./menu-list-item.css";

export default function MenuListItem({
  item,
  id,
  imgUrl,
  title,
  price,
  description,
}) {
  return (
    <div className="menu-item">
      <div className="food-image">
        <div className="img-box">
          <img src={imgUrl} className="food-photo" />
        </div>
      </div>
      <div className="food-description">
        <div className="description-title">
          <h3 className="desc-title"> {title} </h3>
          <h3 className="price">{price}</h3>
        </div>
        <p className="food-desc">{description}</p>
      </div>
    </div>
  );
}
