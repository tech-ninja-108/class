import { RiDeleteBin6Line } from "react-icons/ri";
import { useDeleteCartItem } from "../../hooks/useCartData";

const CartItemList = ({ allData, onDelete }) => {
  const { mutate: deletedItem } = useDeleteCartItem();

  const deleteHandal = (id: number) => {
    deletedItem(id, {
      onSuccess: () => {
        // Yahan wahi original 'id' pass karein jo function ko mili thi
        onDelete(id);
      },
    });
  };

  return (
    <div className="w-full lg:w-2/3 space-y-4">
      {allData.map((item) => (
        <div
          key={item.id}
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Product Image */}
          <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 w-full">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </p>
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  {item.title}
                </h3>
              </div>
              {/* Delete Button */}
              <button
                onClick={() => {
                  deleteHandal(item.id);
                }}
                className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
              >
                <RiDeleteBin6Line />
              </button>
            </div>

            {/* Price & Quantity Controls */}
            <div className="mt-4 flex flex-wrap justify-between items-end gap-4">
              <div>
                <div className="flex items-end gap-2">
                  <span className="text-xl font-black text-indigo-700">
                    ₹
                    {(
                      item.price -
                      (item.discountPercentage * item.price) / 100
                    ).toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-400 line-through mb-0.5">
                    ₹{item.price}
                  </span>
                </div>
                5{" "}
                <p className="text-green-600 text-xs font-semibold mt-1">
                  You save ₹
                  {((item.discountPercentage * item.price) / 100).toFixed(2)}
                </p>
              </div>

              {/* Plus/Minus Buttons */}
              <div className="flex items-center border border-gray-200 rounded-lg">
                <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 font-bold rounded-l-lg transition-colors">
                  -
                </button>
                <span className="px-4 py-1 text-gray-800 font-semibold border-x border-gray-200">
                  {item.quantity}
                </span>
                <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 font-bold rounded-r-lg transition-colors">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
