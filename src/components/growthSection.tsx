import { ArrowRight } from "lucide-react";
import Button from "./ui/button";

const GrowthSection = () => {
  return (
    <section className="max-w-[1300px] mx-auto px-4 py-8 md:py-16">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
            Growth for Both Brands <br /> and Vendors
          </h2>
          <p className="text-gray-700">
            VERA helps you connect with serious buyers, increase visibility, and win more business — across 16+
            European countries.
          </p>
        </div>

        {/* Card 1 */}
        <div className="border border-stock rounded-md p-6">
          <h3 className="text-lg font-semibold mb-2">Trusted by Leading Brands</h3>
          <p className="text-sm text-gray-700 mb-4">
            VERA partners with <strong>trusted brands</strong> across Europe to ensure their products reach
            high-intent buyers — with transparency, speed, and guaranteed value.
          </p>

          <Button variant="primary" size="md" icon={<ArrowRight size={16} />} iconPosition="right" href="/join">
            Partner with Us
          </Button>
        </div>

        {/* Card 2 */}
        <div className="border  border-stock rounded-md p-6">
          <h3 className="text-lg font-semibold mb-2">More Buyers. More Orders.</h3>
          <p className="text-sm text-gray-700 mb-4">
            Join thousands of verified vendors who receive daily quote requests from ready-to-buy customers — all
            across Europe.
          </p>

          <Button variant="primary" size="md" icon={<ArrowRight size={16} />} iconPosition="right" href="/join">
            Join as a Seller
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
