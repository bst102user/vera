import React from 'react'
import SearchBar from '../ui/searchBar'
import { AlignJustify, ChevronDown, Tally1 } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const navbar = [
    { name: 'Electronic', link: '#' },
    { name: 'Fashion', link: '#' },
    { name: 'Phone & Tablet', link: '#' },
    { name: 'Laptop & Computer', link: '#' },
    { name: 'TV, Audio - Video', link: '#' },
  ]

return (
  <header className=" hidden md:block  border-b bg-white">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
      {/* Left Section: Logo */}
      <div className='flex items-center gap-4'>

        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={1000} height={100}  className="w-auto h-9" />
          {/* <img src="/logo.png" alt="Logo" className="w-auto h-9" /> */}
          {/* <span className="text-xl font-bold text-[#C61AFF]">VERA</span> */}
        </div>

        {/* Center: Search */}
        <SearchBar />
      </div>

      {/* Right: Login + Button */}
      <div className="flex items-center gap-6">
        <span className="text-xs text-black">Login</span>
        <button className="text-[#C61AFF] text-xs border-[0.25px] border-[#9595954b] px-4 py-1.5 text-sm rounded-md hover:bg-[#C61AFF] hover:text-white transition">
          Create Account
        </button>
      </div>
    </div>

    {/* Navigation */}
    <div>

    <nav className="border-t border-[#9595954b]">
      <div className="container mx-auto px-4 py-4  flex items-center gap-4 text-sm font-medium text-black">
      <AlignJustify size={16} /> <p className='text-xs'>Shop By Category</p>

      <Tally1 size={20} color='#95959580' />

    
        {navbar.map((item, index) => (
            <span key={index}  className="cursor-pointer text-xs flex items-center gap-1">{item.name} <ChevronDown size={16} /></span>
        ))}
      </div>
    </nav>
        </div>
  </header>

)
}

export default Header