import { useState } from "react";
import { Tag, Mail, FileText } from "lucide-react";

const OrderSummary = () => {
  const [couponCode, setCouponCode] = useState("");
  const [email, setEmail] = useState("");

  const orderItems = [
    { name: "Price", amount: 319.98 },
    { name: "Design", amount: 31.9 },
    { name: "Area", amount: 31.9 },
    { name: "Site Visit", amount: 0.0 },
    { name: "Additional", amount: 0.0 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.amount, 0);
  const discount = couponCode ? subtotal * 0.1 : 0; // 10% discount if coupon applied
  const total = subtotal - discount;

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
      </div>

      {/* Order Items */}
      <div className="flex-1">
        <div className="space-y-3 mb-6">
          {orderItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600">{item.name}</span>
              <span className="font-semibold text-gray-900">
                ${item.amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="border-t border-gray-200 pt-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-900">TOTAL</span>
            <span className="font-bold text-lg text-gray-900">
              ${total.toFixed(2)}
            </span>
          </div>
          {discount > 0 && (
            <div className="text-sm text-green-600 mt-1">
              Discount: -${discount.toFixed(2)}
            </div>
          )}
        </div>
      </div>

      {/* Action Items */}
      <div className="space-y-4">
        {/* Coupon Code */}
        <div className="flex items-center space-x-3">
          <Tag className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Email Quote */}
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-500" />
          <input
            type="email"
            placeholder="Email Quote"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Detailed List */}
        <button className="w-full flex items-center space-x-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
          <FileText className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700 font-medium">Detailed List</span>
        </button>

        {/* Proceed Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
