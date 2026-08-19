import { useState } from "react";
import { useParams } from "react-router";
import { singalData } from "./singleProductqury";

const dataHandalHooks = () => {
  const { id } = useParams();
  const { data, isPending } = singalData(id);
  const [activeImg, setActiveImg] = useState("");
  return {
    data,
    isPending,
    activeImg,
    setActiveImg,
  };
};

export default dataHandalHooks;
