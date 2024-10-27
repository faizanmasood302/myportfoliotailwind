import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const Header = () => {
  return (
    <header className="bg-purple-900 mx-5 mt-2 text-2xl text-white h-24 rounded-t-lg flex items-center place-items-center sm:justify-between justify-between px-4">
      <div className="">
        <h1 className='font-style: italic text-4xl text-center underline'>Faizan Masood</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:block">
        <li className="space-x-4">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="about-us" className="hover:text-gray-300 transition-colors">
            About Me
          </Link>
          <Link href="contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
        <VisuallyHidden>
            <SheetTitle><Menu/></SheetTitle>
        </VisuallyHidden>

            <ul>
              <li className="space-y-4">
                <Link href="/" className="block hover:text-gray-300 transition-colors">
                  Home
                </Link>
                <Link href="about-us" className="block hover:text-gray-300 transition-colors">
                  About Me
                </Link>
              
                <Link href="contact" className="block hover:text-gray-300 transition-colors">
                  contact
                </Link>
              </li>
            </ul>
        </SheetContent>
      </Sheet>

    </header>
  );
};

export default Header;
