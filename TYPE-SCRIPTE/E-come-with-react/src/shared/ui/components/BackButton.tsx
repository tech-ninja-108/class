import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/products")}
      className="flex items-center gap-2 bg-blue-400 px-6 py-2 rounded-3xl mb-2 cursor-pointer"
    >
      <IoMdArrowRoundBack />
      Back
    </button>
  );
};

export default BackButton;
