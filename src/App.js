import "./App.css";
import ProductDetails from "./components/ProductDetails";
import AddProducts from "./components/AddProducts";
import { useState } from "react";
import axios from "axios";

let url = "https://3kedcubnqg.execute-api.ap-south-1.amazonaws.com/prod";

function App() {
  const [data, setData] = useState([]);
  const fetchAllProducts = () => {
    axios
      .get(url)
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <h1>PRODUCT</h1>
      <AddProducts fetchAllProducts={fetchAllProducts} />
      <ProductDetails
        fetchAllProducts={fetchAllProducts}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default App;
