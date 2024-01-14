
import { GoTriangleDown } from "react-icons/go";
import TrendingCards from "./TrendingCards";




const NavLinks = () => {

    const links = [
        {
            id: 1,
            Title: 'Home'
        },
        {
            id: 2,
            Title: 'Top Rated'
        },
        {
            id: 3,
            Title: 'Kids Wear'
        },
        {
            id: 4,
            Title: 'Mens Wear'
        },
        {
            id: 5,
            Title: 'Electronics'
        },
    ]



    return (
        <div className=" bg-[#ffffff] shadow-slate-400 p-[0.5rem] ml-8 ">
            <div className="w-[100%]">
                <ul className="flex gap-12 items-center justify-center">
                    {
                        links.map(item => <li key={item.id} className="text-[16px] hover:text-[#fca625] duration-300">{item.Title}</li>)
                    }
                    <div className="flex items-center group relative ">
                        <li className="group-hover:text-[#fca625] duration-300 "> Trending Products</li>
                        <GoTriangleDown size={18} className="group-hover:rotate-[180deg] duration-150" />
                        <div className="absolute top-[1.5rem] hidden z-[9999]  group-hover:block ">
                            <TrendingCards />
                        </div>
                    </div>

                </ul>
            </div>
        </div>
    );
};

export default NavLinks;