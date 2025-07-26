import { MdDeleteOutline } from "react-icons/md";
import { toast, Bounce } from "react-toastify";
import Swal from "sweetalert2";

export default function Item({ item, setItems }) {
  function handleBought(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );

    if (!item.bought)
      toast.success("🥳 Nicely done!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
  }

  function handleDelete(id) {
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
        setItems((items) => items.filter((item) => item.id !== id));

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  return (
    <div className="item">
      <div>
        <input
          type="checkbox"
          onChange={() => handleBought(item.id)}
          value={item.bought}
        />
        <p
          style={
            item.bought ? { textDecoration: "line-through", color: "gray" } : {}
          }
        >
          {item.quantity} x {item.name}
        </p>
      </div>
      <button onClick={() => handleDelete(item.id)}>
        <MdDeleteOutline style={{ fontSize: "18px" }} />
      </button>
    </div>
  );
}
