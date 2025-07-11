"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "SSG Maria T.",
        designation: "Buyer",
        star: 5,
        image: "/images/maria.jpg",
        description: "I love that I don’t have to wonder if I’m overpaying. VERA brings the vendors to me, and I choose the price that works for my budget.",

    },
    {
        name: "SSG Maria T.",
        designation: "Buyer",
        star: 5,
        image: "/images/maria.jpg",
        description: "I love that I don’t have to wonder if I’m overpaying. VERA brings the vendors to me, and I choose the price that works for my budget.",

    },
    {
        name: "SSG Maria T.",
        designation: "Buyer",
        star: 5,
        image: "/images/maria.jpg",
        description: "I love that I don’t have to wonder if I’m overpaying. VERA brings the vendors to me, and I choose the price that works for my budget.",

    },
    {
        name: "SSG Maria T.",
        designation: "Buyer",
        star: 5,
        image: "/images/maria.jpg",
        description: "I love that I don’t have to wonder if I’m overpaying. VERA brings the vendors to me, and I choose the price that works for my budget.",

    },
    {
        name: "SSG Maria T.",
        designation: "Buyer",
        star: 5,
        image: "/images/maria.jpg",
        description: "I love that I don’t have to wonder if I’m overpaying. VERA brings the vendors to me, and I choose the price that works for my budget.",

    },

];

const Testimonial: React.FC = () => {
    // const reviews = useReviews()
    // console.log(reviews.data?.messages, "reviews");
    // const testimonials = reviews?.data?.messages

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };
    return (
        <section className="bg-[#f9f9f9] py-8 pb-14 md:py-16">
            <div className="max-w-[1420px] mx-auto text-center px-4">
                <div className="text-center md:mb-10 w-[95%]">
                    <h2 className="h2 mb-4">
                        Buyers Love VERA — Here’s Why
                    </h2>
                    <p>See how VERA is changing the way people shop and negotiate — one quote at a time.</p>

                </div>
                <Slider {...settings}>
                    {testimonials?.map((t: any, idx: any) => (
                        <div key={idx} className="px-2">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-left min-h-[240px] flex flex-col content-between">

                                <div className="flex flex-col  mt-auto">
                                    <Quote fill="black" />
                                    <p className="text-sm text-gray-800 my-2 md:leading-8">{t.description}</p>
                                    <div className="flex justify-end">

                                    <Quote fill="black" />
                                    </div>

                                    {/* <Image src={t.image} alt={t.name} width={300} height={60} className="w-12 h-12 rounded-full object-cover mr-3" /> */}

                                    <p className="font-semibold">{t.title}</p>
                                </div>
                                <div className=" flex justify-between border-t border-stock pt-4 mt-4">
                                    <div>
                                        <p className="text-black font-semibold">{t?.name}</p>
                                        <p className="text-sm">{t?.designation}</p>
                                    </div>
                                    <div className="flex mb-6 gap-1 text-yellow-500 text-lg">

                                        {Array(t?.star)
                                            .fill(0)
                                            .map((_, i) => (
                                                <Star key={i}  className="text-[color:var(--yellow)]"/>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <style jsx global>{`
        .slick-dots {
          margin-top: 2rem;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #bbb;
        }
        .slick-dots li.slick-active button:before {
          color: #b43141;
        }
      `}</style>
        </section>
    );
};

export default Testimonial;