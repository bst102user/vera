import { url } from "inspector";
import { BadgeDollarSign, UserCheck2, HandCoins, UserCheck } from "lucide-react";

const Usps = () => {
    const features = [
        {

            //   icon: <BadgeDollarSign className="text-white w-5 h-5" />,
            icon: <img src="/icons/price.png" alt="Best Price Guarantee" className="w-10 h-10" />,
            title: "Best Price Guarantee",
            description: "Vendors compete to offer you the lowest prices every time.",
        },
        {
            //   icon: <UserCheck className="text-white w-5 h-5" />,
            icon: <img src="/icons/verified.png" alt="Best Price Guarantee" className="w-10 h-10" />,
            title: "Verified Sellers Only",
            description:
                "Every vendor is thoroughly verified to ensure product authenticity, service quality.",
        },
        {
            //   icon: <HandCoins className="text-white w-5 h-5" />,
            icon: <img src="/icons/commission.png" alt="Best Price Guarantee" className="w-10 h-10" />,
            title: "Commission-Based Model",
            description:
                "We only earn when you complete a purchase, ensuring transparency and fairness.",
        },
    ];

    return (
        <div className="bg-[#fef6ff] py-8 md:py-16">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start ">
                        {/* <div className="bg-[#C61AFF] rounded-full w-14 h-12 p-2 flex items-center justify-center"> */}
                            {item.icon}
                        {/* </div> */}
                        <div>
                            <h4 className="font-semibold text-base text-black">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Usps;
