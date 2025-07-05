import Image from "next/image";

export default function ThreeStepSection() {
  const steps = [
    {
      number: "01",
      title: "Select Product",
      desc: "Browse our categories or search directly — find exactly what you need in seconds.",
    },
    {
      number: "02",
      title: "Send a Quote Request",
      desc: "With one click, your request goes to multiple verified vendors across the platform.",
    },
    {
      number: "03",
      title: "Choose the Best Price",
      desc: "Compare vendor offers, pick the best deal, and complete your purchase — all in one place.",
    },
  ]
  return (
    <section className="relative bg-black text-white">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/ThreeStepSection-Bg.jpg" // Replace with your actual image
          alt="Steps background"
          fill
          className="object-cover opacity-70"
        />
      </div>
      <div className="absolute inset-0 bg-[#000000] opacity-70 z-0"></div>

      <div className="relative z-10 px-4 py-16 max-w-4xl mx-auto text-center">
        {/* Headings */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
          Get the Best Deal in Just 3 Simple Steps
        </h2>
        <p className="text-sm sm:text-base text-gray-200 mb-10">
          From product selection to purchase. Just choose, request, and save.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Circle number */}
              <div className="w-28 h-28 rounded-full  text-black bg-white font-semibold text-lg flex flex-col justify-center items-center mb-4">
                <div className="border-8 border-[#C61AFF] rounded-full w-26 h-26 flex flex-col justify-center items-center ">

                {step.number}
                <span className="text-xs font-normal">Step</span>
                </div>
              </div>
              {/* Title + Desc */}
              <h3 className="font-semibold text-white mb-1">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="px-6 py-2 border border-[#9595954b] rounded-md text-white hover:bg-white hover:text-black transition">
          Send Your First Quote →
        </button>
      </div>
    </section>
  );
}
