import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

export default function Form({ setItems }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const newItem = {
    id: new Date(),
    quantity: quantity,
    name: name,
    bought: false,
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "") {
      toast.error("Enter Task!", {
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

      return;
    }

    setItems((items) => [...items, newItem]);

    setQuantity(1);
    setName("");
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <form className="form" onSubmit={handleSubmit}>
        <p>What you want to buy?</p>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => (
            <option value={i + 1}>{i + 1}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="add task..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
