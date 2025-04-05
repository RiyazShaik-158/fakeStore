import React, { useEffect, useState } from "react";
import { Product_Type } from "../utils/types";
import Product from "./Product";

const Home = () => {
  const [storeData, setStoreData] = useState([]);

  const fetchingData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setStoreData(data);
    } catch (err) {
      console.log("error :", err);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="h-[93vh] flex flex-col items-center bg-white">
      <h4 className="text-xl font-semibold py-1.5">Welcome to home</h4>
      <div className="flex flex-wrap gap-12 justify-between items-center w-[80%] py-6 px-4 shadow-xl">
        {storeData.map((item: Product_Type) => (
          <Product item={item} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Home;
