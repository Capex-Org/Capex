import { useState } from "react";
import { Tag, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { calculateTotalPrice, getRelevantOrderItems } from "@/lib/appData";

interface OrderSummaryProps {
  selectedItems: { [stepName: string]: number };
  selectedProjectType: string;
}

const OrderSummary = ({
  selectedItems,
  selectedProjectType,
}: OrderSummaryProps) => {
  const [couponCode, setCouponCode] = useState("");
  const [email, setEmail] = useState("");

  const subtotal = calculateTotalPrice(selectedItems, selectedProjectType);
  const discount = couponCode ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  // Get relevant order items for the current project type
  const orderItems = getRelevantOrderItems(selectedItems, selectedProjectType);

  return (
    <div className="bg-white">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="p-4 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Order Summary
          </h2>

          {/* Order Items */}
          <div className="space-y-3 mb-4">
            {orderItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">{item.name}</span>
                <span className="font-semibold text-gray-900 text-sm">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t border-gray-200 pt-3 mb-4">
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

          {/* Action Items */}
          <div className="space-y-3">
            {/* Coupon Code */}
            <div className="flex items-center space-x-3">
              <Tag className="w-4 h-4 text-gray-500" />
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
              <Mail className="w-4 h-4 text-gray-500" />
              <input
                type="email"
                placeholder="Email Quote"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Detailed List */}
            <Button
              variant="outline"
              className="w-full flex items-center space-x-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700 font-medium text-sm">
                Detailed List
              </span>
            </Button>

            {/* Proceed Button */}
            <Button size="lg" className="w-full" variant="default">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-full flex-col">
        {/* Header - Fixed */}
        <div className="flex-shrink-0 p-6 pb-4">
          <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
        </div>

        {/* Order Items - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6">
          <div className="space-y-3 mb-6">
            {orderItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-600">{item.name}</span>
                <span className="font-semibold text-gray-900">
                  ${item.price.toFixed(2)}
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

        {/* Action Items - Fixed */}
        <div className="flex-shrink-0 space-y-4 p-6 pt-4">
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
          <Button
            variant="outline"
            className="w-full flex items-center space-x-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            <FileText className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Detailed List</span>
          </Button>

          {/* Proceed Button */}
          <Button className="w-full" variant="default" size="lg">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
