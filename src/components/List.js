import Item from "./Item";

export default function List({ items, setItems, sortedItems }) {
  return (
    <div className="list">
      {sortedItems.map((item) => (
        <Item key={item.id} item={item} setItems={setItems} />
      ))}
    </div>
  );
}
