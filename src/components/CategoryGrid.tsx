import Image from "next/image";

const categories = [
    {
        title: "Mobile & Tablets",
        subtitle: "Stay Connected in Style",
        image: "/assets/phone.png",
        bg: "bg-[#eef1f4]",
        span: "row-span-2 col-span-2",
    },
    {
        title: "Laptops & Computers",
        subtitle: "Power Up Your Productivity",
        image: "/assets/laptop.png",
        bg: "bg-[#eef1f4]",
        span: "col-start-3 col-span-2",
    },
    {
        title: "TV, Video & Audio",
        subtitle: "",
        image: "/assets/tv.png",
        bg: "bg-[#eef1f4]",

        span: "col-start-3 row-start-2",

    },
    {
        title: "Other Accessories",
        subtitle: "",
        image: "/assets/headphone.png",
        bg: "bg-[#eef1f4]",
        span: "col-start-4 row-start-2",

    },
    {
        title: "Home Decor",
        subtitle: "Style Your Space Effortlessly",
        image: "/assets/chair.jpg",
        bg: "bg-[#84A8A9]",
        text: "text-white",
        span: "col-start-5 row-start-1 row-span-2",
    },
];

export default function CategoryGrid() {
    return (

        <section className="max-w-7xl m-auto grid grid-cols-5 grid-rows-2 gap-4 p-4 h-[500px]  py-8 md:py-16">
            {categories.map((cat, i) => (
                <div
                    key={i}
                    className={`p-4 rounded-lg flex flex-col justify-between overflow-hidden  ${cat.bg} ${cat.span || ""}`}
                >
                    <div className={`mb-4 ${cat.text || "text-black"}`}>
                        <h3 className="text-2xl font-semibold">{cat.title}</h3>
                        {cat.subtitle && <p className="text-lg">{cat.subtitle}</p>}
                    </div>
                    <div className="grid place-items-end h-full">

                        <Image
                            src={cat.image}
                            alt={cat.title}
                            width={300}
                            height={200}
                            className="object-contain "
                        />
                    </div>
                </div>
            ))}
        </section>
    );
}
