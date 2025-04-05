import React, { useEffect, useState } from "react";
import { Product_Type } from "../utils/types";

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
          <div
            key={item.id}
            className="w-[16rem] h-[20rem] shadow-lg rounded-md flex flex-col justify-between items-center py-2 pb-8"
          >
            <img
              src={item.image}
              alt={item.image}
              className="w-[65%] min-h-[70%] aspect-auto object-fill"
            />
            <div className="w-full px-4 pt-1 flex flex-col pb-4">
              <h4 className="w-full text-lg text-start ">
                {item.title.substring(0, 20)}
              </h4>
              <h4 className="text-lg font-semibold text-start w-full">
                <sup className="relative -top-1">Rs</sup> {item.price}
              </h4>
            </div>
            <button className="w-[80%] rounded-md bg-yellow-300 p-1">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Home;
