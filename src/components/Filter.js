import Swal from "sweetalert2";

export default function Filter({
  items,
  setItems,
  sort,
  setSort,
  sortedItems,
}) {
  function handleClear() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setItems([]);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  return (
    <div className="filter">
      <div>
        <p>Sort by:</p>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="order">Order</option>
          <option value="name">Name</option>
          <option value="bought">Bought</option>
        </select>
      </div>
      <button onClick={handleClear}>Clear all</button>
    </div>
  );
}
