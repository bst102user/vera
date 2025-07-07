import Image from 'next/image';
import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pb-6 text-sm py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left: Logo + Contact */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#C61AFF] text-xl font-bold">
            {/* Replace with actual logo */}
            <Image src="/logo.png" alt="VERA Logo" width={120} height={40} />
          </div>
          <div className="text-gray-400 space-y-1">
            <p>45 Innovation Street,<br />Berlin Tech Park,<br />10115 Berlin, Germany</p>
            <p>info@example.com</p>
          </div>
          <p className="text-lg font-semibold">(+92) 3942 7879</p>
        </div>

        {/* SHOPPING */}
        <div>
          <h3 className="font-semibold mb-3">SHOPPING</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Browse Categories</li>
            <li>Request a Quote</li>
            <li>Offers</li>
            <li>Track order</li>
            <li>Size Guide</li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div>
          <h3 className="font-semibold mb-3">INFORMATION</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Become a Vendor</li>
            <li>Seller Guidelines</li>
            <li>Commission Policy</li>
            <li>Support for Sellers</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        {/* ACCOUNT */}
        <div>
          <h3 className="font-semibold mb-3">ACCOUNT</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Cart</li>
            <li>My account</li>
            <li>My orders</li>
            <li>Wishlist</li>
            <li>Affiliate Program</li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="font-semibold mb-3">Let’s keep in touch</h3>
          <div className="flex items-center bg-white text-black rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="enter your email address"
              className="px-3 py-2 outline-none w-full text-sm"
            />
            <button className="bg-[#C61AFF] px-4 py-2 text-white">→</button>
          </div>

          <div className="flex gap-4 mt-4 text-lg text-gray-400">
            <i className="ri-facebook-line" />
            <i className="ri-tiktok-line" />
            <i className="ri-twitter-x-line" />
            <i className="ri-youtube-line" />
            <i className="ri-instagram-line" />
          </div>
        </div>
      </div>

      {/* Help Strip */}
      <div className="border-t border-gray-800 py-8 md:py-16 px-4 grid grid-cols-1 md:grid-cols-3 text-gray-300 text-center gap-4">
        <div>
          <p className="font-semibold">Didn’t find what you were looking for?</p>
          <p className="underline cursor-pointer">Contact Us</p>
        </div>
        <div>
          <p className="font-semibold"> How can we help you today?</p>
          <p className="underline cursor-pointer">Help Center</p>
        </div>
        <div>
          <p className="font-semibold"> We’d love to hear what you think!</p>
          <p className="underline cursor-pointer">Give Feedback</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl m-auto  border-t border-gray-800 mt-6 pt-4 px-4 flex flex-col md:flex-row justify-between items-center text-gray-500">
        <p>© 2025 VERA Technologies. All rights reserved.</p>
        <div className="flex gap-3 mt-3 md:mt-0">
          <img src="/icons/paypal.svg" alt="PayPal" className="h-5" />
          <img src="/icons/applepay.svg" alt="Apple Pay" className="h-5" />
          <img src="/icons/visa.svg" alt="Visa" className="h-5" />
          <img src="/icons/discover.svg" alt="Discover" className="h-5" />
          <img src="/icons/jcb.svg" alt="JCB" className="h-5" />
          <img src="/icons/amex.svg" alt="American Express" className="h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
