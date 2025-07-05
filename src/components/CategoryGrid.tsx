import Image from "next/image";

const categories = [
    {
        title: "Mobile & Tablets",
        subtitle: "Stay Connected in Style",
        image: "/assets/phone.png",
        bg: "bg-[#eef1f4]",
        colSpan: "col-span-2 row-span-2",
    },
    {
        title: "Laptops & Computers",
        subtitle: "Power Up Your Productivity",
        image: "/assets/laptop.png",
        bg: "bg-[#eef1f4]",
    },
    {
        title: "TV, Video & Audio",
        subtitle: "",
        image: "/assets/tv.png",
        bg: "bg-white",
    },
    {
        title: "Other Accessories",
        subtitle: "",
        image: "/assets/headphone.png",
        bg: "bg-white",
    },
    {
        title: "Home Decor",
        subtitle: "Style Your Space Effortlessly",
        image: "/assets/chair.jpg",
        bg: "bg-[#84A8A9]",
        text: "text-white",
        colSpan: "row-span-2",
    },
];

export default function CategoryGrid() {
    return (
        <section className="max-w-7xl m-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {categories.map((cat, i) => (
                <div
                    key={i}
                    className={`p-4 rounded-lg flex flex-col justify-between ${cat.bg} ${cat.colSpan || ""
                        }`}
                >
                    <div className={`mb-4 ${cat.text || "text-black"}`}>
                        <h3 className="font-semibold text-lg">{cat.title}</h3>
                        {cat.subtitle && <p className="text-sm">{cat.subtitle}</p>}
                    </div>
                    <Image
                        src={cat.image}
                        alt={cat.title}
                        width={300}
                        height={200}
                        className="object-contain mx-auto"
                    />
                </div>
            ))}
        </section>
    );
}
