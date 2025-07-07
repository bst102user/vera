import { Check, CircleCheckBig } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import Gallery from './ui/gallery';

const Why = () => {
    const features = [
        {
            icon: <CircleCheckBig size={20} />,
            title: "Give you the lowest possible prices on every purchase.",
        },
        {
            icon: <CircleCheckBig size={20} />,
            title: "Receive quotes within hours, to make decisions quickly.",
        },
        {
            icon: <CircleCheckBig size={20} />,
            title: "No hidden charges or platform fees for buyers.",
        },
    ];
    return (
        <div className='max-w-7xl mx-auto px-4 py-8 md:py-16'>
            <div className=' grid grid-cols-1 md:grid-cols-[4fr_3fr_2fr] gap-8 border border-gray-200 rounded-2xl px-4 py-8 md:py-16 items-center shadow-lg'>
                <div className='flex flex-col items-start justify-center gap-4 '>

                    <h2 className=' h2  '>Why Choose <span className='text-primary'>VERA?</span></h2>
                    <p>We believe buying should be simple, transparent, and empowering. Instead of spending hours comparing prices across websites. One quote request and let vendors compete for your business. This means you save time and always know you’re getting the best deal available.</p>
                    <ul className='space-y-3'>
                        {features.map((item, index) => (
                            <li key={index} className='grid grid-cols-[auto_1fr] gap-2 items-center text-gray-700 '>
                                <span className='text-primary'>{item.icon} </span>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='bg-[#fef6ff] flex items-center justify-center rounded-xl overflow-hidden h-full'>
                    <Image 
                        src="/assets/75e44a29dd5265014dbb4e47e543bc8cc97aaade.jpg" 
                        alt="Why Choose VERA" 
                        width={500} 
                        height={500}
                        className='object-cover h-full w-full'
                    />

                </div>
                <div className="bg-[#fef6ff] flex items-center justify-center rounded-xl overflow-hidden h-full">
                    <Image
                        src="/assets/d36b5d7ca5dffd177cbb394bbe70dc52f8831520.jpg"
                        alt="Why Choose VERA"
                        width={500}
                        height={500}
                        className='object-cover h-full w-full '
                    />
                </div>
                {/* <Gallery images={["/assets/75e44a29dd5265014dbb4e47e543bc8cc97aaade.jpg", "/assets/d36b5d7ca5dffd177cbb394bbe70dc52f8831520.jpg"]} /> */}
            </div>

        </div>
    )
}

export default Why