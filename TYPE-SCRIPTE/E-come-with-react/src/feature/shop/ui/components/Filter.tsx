import React, { useEffect, useState } from "react";
import { category } from "../../api/ProductData";
import { useSearchParams } from "react-router"; // useNavigate ki jagah ye import karein

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. URL se initial values padhein (taki re-render par data gayab na ho)
  const initialPrice = Number(searchParams.get("price")) || 50;
  // Agar URL me category hai to array banao, warna khali array rakho
  const initialCategoryParam = searchParams.get("category");
  const initialCategories = initialCategoryParam
    ? initialCategoryParam.split(",")
    : [];

  const [priceRange, setPriceRange] = useState<number>(initialPrice);
  const [categorys, setcategorys] = useState<string[]>([]);
  const [filters, setfilter] = useState<string[]>(initialCategories);

  const cats = async () => {
    const cet = await category();
    setcategorys(cet.slice(0, 20));
  };

  useEffect(() => {
    cats();
  }, []);

  const handelFilter = (val: string) => {
    setfilter((prev) => {
      if (prev.includes(val)) {
        return prev.filter((item) => item !== val);
      } else {
        return [...prev, val];
      }
    });
  };

  const filterdata = () => {
    // 2. Naya URLSearchParams object banayein purane params (jaise 'search') ke sath
    const newParams = new URLSearchParams(searchParams);

    // 3. Category aur Price set karein
    if (filters.length > 0) {
      newParams.set("category", filters.join(",")); // "smartphones,laptops"
    } else {
      newParams.delete("category"); // Agar sab uncheck kar diya to URL se hata do
    }

    newParams.set("price", priceRange.toString());

    // 4. URL update karein (Ye navigate ka hi kaam karega bina search delete kiye)
    setSearchParams(newParams);
  };

  return (
    <aside className="w-full sticky top-20 h-[calc(100vh-2rem)] overflow-y-auto md:w-1/5 bg-white p-6 rounded-lg shadow-sm h-fit">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">Categories</h3>
        <ul className="space-y-2 text-gray-600">
          {categorys?.map((val: string) => (
            <li key={val}>
              <label className="flex items-center gap-2">
                <input
                  checked={filters.includes(val)}
                  onChange={() => handelFilter(val)}
                  type="checkbox"
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                  name={val}
                />{" "}
                {val}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-gray-700 mb-2">
          Max Price: ₹{priceRange}
        </h3>
        <input
          type="range"
          min="50"
          max="20000" // Max 500 se badha kar 20000 kar diya hai
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-indigo-600 cursor-pointer"
        />
      </div>
      <button
        type="button" // type="button" lagana zaroori hai taki default form submit jaisa behave na kare
        onClick={filterdata}
        className="bg-blue-600 text-white px-6 py-2 rounded-2xl ml-7 mt-6 cursor-pointer"
      >
        Apply Filter
      </button>
    </aside>
  );
};

export default Filter;
