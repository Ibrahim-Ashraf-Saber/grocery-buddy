import { useState } from "react";
import "../styles.css";
import Content from "./Content";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <Header />
      <Form setItems={setItems} />
      <Content items={items} setItems={setItems} />
      <Footer items={items} />
    </div>
  );
}
