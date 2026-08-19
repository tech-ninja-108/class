import React, { useState, useEffect } from "react";
import { useCartData } from "../../hooks/useCartData";
import BackButton from "../../../../shared/ui/components/BackButton";
import CartItemList from "../components/CartItemList";
import OrderSummery from "../components/OrderSummery";

const Cart = () => {
  const [allData, setAllData] = useState([]);
  const { data, isPending } = useCartData(5);

  // Jab API se data aa jaye, tab state ko sirf ek baar set karne ke liye useEffect use karein
  useEffect(() => {
    if (data) {
      const allDatas = data.flatMap((vel) => vel.products);
      setAllData(allDatas);
    }
  }, [data]);

  if (isPending) return "Loading...";

  // Delete hone par list se item turant hatane ka logic
  const onDeleteHandal = (id: number) => {
    setAllData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
        <h1 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">
          Your Cart
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <CartItemList allData={allData} onDelete={onDeleteHandal} />
          <OrderSummery data={data} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
