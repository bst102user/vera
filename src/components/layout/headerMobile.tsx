"use client"
import React from 'react'
import SearchBar from '../ui/searchBar'
import { AlignJustify, ChevronDown, Menu, Search, Tally1, X } from 'lucide-react'
import Button from '../ui/button'
import Image from 'next/image'

const HeaderMobile = () => {
  const [isToggle, setIsToggle] = React.useState<boolean>(false);
  const [isSearch, setIsSearch] = React.useState<boolean>(false);
  const navbar = [
    { name: 'Electronic', link: '#' },
    { name: 'Fashion', link: '#' },
    { name: 'Phone & Tablet', link: '#' },
    { name: 'Laptop & Computer', link: '#' },
    { name: 'TV, Audio - Video', link: '#' },
  ]

  return (
    <header className="md:hidden  border-b bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left Section: Logo */}
        <div className='w-full flex items-center gap-4 justify-between'>

          <Image src="/logo.png" alt="Logo" width={1000} height={100}  className="w-auto h-9" />
          <div className="flex items-center gap-2">

            <Search size={20} onClick={() => setIsSearch(!isSearch)} />


            {isToggle ? (
              <X onClick={() => setIsToggle(!isToggle)} />
            ) : (
              <Menu onClick={() => setIsToggle(!isToggle)} />
            )
            }
          </div>
        </div>
      </div>
      {isSearch ? (
        <div className="container mx-auto px-4 py-2">
          <SearchBar />
        </div>
      ) : null}

      <div>
        {
          isToggle ? (<nav className="border-t border-[#9595954b] py-8">
            <div className="container mx-auto px-4 py-4  flex flex-col items-center gap-4 text-sm font-medium text-black">
              {/* <AlignJustify size={16} />  */}
              <p className='text-base'>Shop By Category</p>

              {/* <Tally1 size={20} color='#95959580' /> */}


              {navbar.map((item, index) => (
                <span key={index} className="cursor-pointer text-base flex items-center gap-1">{item.name} <ChevronDown size={16} /></span>
              ))}
            </div>
            <div className="flex items-center flex-col gap-6">
              <span className="text-base text-black">Login</span>
              {/* <button className="text-[#C61AFF] text-xs border-[0.25px] border-[#9595954b] px-4 py-1.5 text-sm rounded-md hover:bg-[#C61AFF] hover:text-white transition">
                Create Account
              </button> */}
              <Button variant='primary'>
              Create Account
              </Button>
            </div>
          </nav>
          ) : ("")
        }

      </div>
    </header>

  )
}

export default HeaderMobile