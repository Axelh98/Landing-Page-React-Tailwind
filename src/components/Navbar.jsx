import logo from "../assets/logo.png";
import {navItems} from "../assets/constants";

const Navbar = () => {
  return (
    <nav className="stycky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shirnk-0">
                    <img className="h-10 w-10 mr-2" src="{ logo }" alt="logo" />
                    <span className="text-xl-tracking-tight">VirtualR</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index} className="hover:text-primary-500 transition-all duration-300">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center scpace x items-center">
                    <a href="#" className="py-2 px-3 border rounded-md">
                        Sign In
                    </a>
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                        Create an account
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar