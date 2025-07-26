import { useState } from "react";
import Filter from "./Filter";
import List from "./List";

export default function Content({ items, setItems }) {
  const [sort, setSort] = useState("order");

  let sortedItems;

  if (sort === "order") sortedItems = items;
  if (sort === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "bought")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.bought) - Number(b.bought));

  return (
    <div className="content">
      <Filter
        items={items}
        setItems={setItems}
        sort={sort}
        setSort={setSort}
        sortedItems={sortedItems}
      />
      <List items={items} setItems={setItems} sortedItems={sortedItems} />
    </div>
  );
}
