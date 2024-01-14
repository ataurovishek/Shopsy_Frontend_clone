
import { IoIosSearch } from "react-icons/io";
import { MdLocalGroceryStore } from "react-icons/md";
import Darkmode from "../DarkMode/Darkmode";
import NavLinks from "../Links/NavLinks";


const Navbar = () => {


    return (
        <div className="navbar">
            <div className="bg-[#ffdda9]  flex items-center justify-between px-[6.3rem] py-2 ">
                <div className="flex items-center gap-2">
                    <div className="w-10">
                        <img src="./logo.png" className="w-[100%] object-cover" alt="Logo" />
                    </div>
                    <h1 className=" font-bold text-3xl">Shopsy</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center relative group ">
                        <input type="text" placeholder="search" className="w-[12rem] pl-[10px] text-[14px] border-[1px] group-hover:w-[20rem] ease-out duration-300 border-solid focus:border-orange-400  outline-none rounded-full p-[6px]" />
                        <IoIosSearch className="absolute right-3 w-[13px] text-neutral-600 group-hover:text-orange-500" />
                    </div>

                    <div className="group flex gap-2  items-center px-[15px] py-[2px] bg-[#faa11e] rounded-full">
                        <h3 className="text-white font-semibold hidden group-hover:block group-hover:p-[0.2rem]">Order</h3>
                        <MdLocalGroceryStore className="text-white" size={23} />
                    </div>
                    <Darkmode />
                </div>
            </div>
            <NavLinks />
        </div>

    );
};
export default Navbar;