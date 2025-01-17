import { Menu, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Link from 'next/link'

// function Header() {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50">
//       {/* Main header */}
//       <div className="h-20 bg-[#2e0249] border-b">
//         <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6">
//           {/* Logo */}
//           <div className='h-full w-[200px] relative'>
//             <Link href="/" className="flex-shrink-0">
//               <Image src={"/logo.png"} alt={"Logo"} fill objectFit='cover' />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-10">
//             <Link href="/" className="text-[20px] font-medium text-[#ffffff] hover:text-[#a91079]">Home</Link>
//             <Link href="/blog" className="text-[20px] font-medium text-[#ffffff] hover:text-[#a91079]">Blog</Link>
//             <Link href="/contact" className="text-[20px] font-medium text-[#ffffff] hover:text-[#a91079]">Contact</Link>
//           </nav>

//           {/* Mobile Menu */}
//           <Sheet>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon">
//                 <Menu className="h-6 w-6 text-[#ffffff]" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="bg-[#2e0249]">
//               <nav className="flex flex-col gap-4 mt-8">
//                 <Link href="/" className="text-lg font-medium text-[#ffffff] hover:text-[#a91079]">Home</Link>
//                 <Link href="/blog" className="text-lg font-medium text-[#ffffff] hover:text-[#a91079]">Blog</Link>
//                 <Link href="/contact" className="text-lg font-medium text-[#ffffff] hover:text-[#a91079]">Contact</Link>
//               </nav>
//             </SheetContent>
//           </Sheet>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">
//             {/* Search */}
//             <div className="hidden md:flex items-center relative">
//               <Input
//                 type="search"
//                 placeholder="Search"
//                 className="w-[180px] bg-[#eeeeee] text-[#ffffff] border-none rounded-full pl-10"
//               />
//               <Search className="w-5 h-5 absolute left-3 text-[#a91079]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header



function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2e0249] shadow-md">
      {/* Main header */}
      <div className="h-20 border-b transition-all duration-300">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="h-full w-[150px] md:w-[200px] relative">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo2.png.webp" alt="Logo" fill objectFit="cover" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link
              href="/"
              className="text-lg lg:text-[20px] font-medium text-white hover:text-[#a91079] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-lg lg:text-[20px] font-medium text-white hover:text-[#a91079] transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-lg lg:text-[20px] font-medium text-white hover:text-[#a91079] transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white hover:text-[#a91079] transition-colors duration-300" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-[#2e0249] text-white animate-slide-in-left"
            >
              <nav className="flex flex-col gap-6 mt-8 px-4">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-[#a91079] transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium hover:text-[#a91079] transition-colors duration-300"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium hover:text-[#a91079] transition-colors duration-300"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Input
                type="search"
                placeholder="Search"
                className="w-[150px] lg:w-[200px] bg-[#eeeeee] text-[#2e0249] border-none rounded-full pl-10 focus:w-[220px] focus:shadow-md focus:outline-none transition-all duration-300"
              />
              <Search className="w-5 h-5 absolute left-3 text-[#a91079]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
