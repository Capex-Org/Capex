import PricingNavigation from "./components/PricingNavigation";
import PackageSelection from "./components/PackageSelection";
import OrderSummary from "./components/OrderSummary";

const Pricing = () => {
  return (
    <section className="section-white">
      <div className="section-content">
        <div className="h-screen bg-gray-50 overflow-hidden">
          <div className="flex h-full">
            {/* Left Panel - Navigation */}
            <div className="w-1/4 bg-white border-r border-gray-200 overflow-hidden">
              <PricingNavigation />
            </div>

            {/* Center Panel - Package Selection */}
            <div className="w-1/2 bg-white overflow-hidden">
              <PackageSelection />
            </div>

            {/* Right Panel - Order Summary */}
            <div className="w-1/4 bg-white border-l border-gray-200 overflow-hidden">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
