import React from "react";

const OrderSummery = ({ data }) => {
  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

        {/* Promo Code Input */}
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Enter Promo Code"
            className="w-full border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 uppercase font-semibold text-gray-700 text-sm"
          />
          <button className="bg-gray-900 text-white px-4 py-2 rounded-r-lg font-bold hover:bg-gray-800 transition-colors text-sm">
            APPLY
          </button>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 text-sm text-gray-600 mb-6">
          <div className="flex justify-between">
            <span>Price ({data[0].products.length} items)</span>
            <span className="font-semibold text-gray-800">
              ₹{data[0].total}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="font-semibold text-green-600">FREE</span>
          </div>
          {/* Highlighted Extra Discount / Loot Deal */}
          <div className="flex justify-between bg-green-50 p-2 rounded-lg border border-green-100">
            <span className="font-semibold text-green-700">
              Special Loot Discount
            </span>
            <span className="font-bold text-green-700">
              - ₹{(data[0].total - data[0].discountedTotal).toFixed(0)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Extra Cashback Applied</span>
            <span className="font-semibold text-green-600">- ₹10</span>
          </div>
        </div>

        <hr className="border-gray-200 mb-4" />

        {/* Total Amount */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-bold text-gray-800">Total Amount</span>
          <span className="text-2xl font-black text-indigo-700">
            ₹{(data[0].discountedTotal - 10).toFixed(2)}
          </span>
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 px-4 rounded-xl shadow-lg shadow-indigo-200 transition-all duration-200 active:scale-95 text-lg">
          Proceed to Checkout
        </button>

        <p className="text-center text-xs text-gray-400 mt-4 font-medium flex items-center justify-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          Secure and Encrypted Payments
        </p>
      </div>
    </div>
  );
};

export default OrderSummery;
