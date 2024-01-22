import img1 from '../../assets/women/women2.jpg'

import { TbTruckDelivery } from "react-icons/tb";


import { MdDiscount, MdOutlineProductionQuantityLimits, MdPayment } from 'react-icons/md';
const DiscountProducts = () => {
    return (
        <div className='w-[75%] pl-[5rem] mx-auto'>
            <div className='flex items-start gap-[8rem]  mx-auto pb-40'>

                <img src={img1} alt="" className='w-[25rem] mt-4 h-[22rem] object-cover shadow-3xl' />

                <div className='flex flex-col gap-6 w-[50rem]'>
                    <h4 className='text-[2.3rem] whitespace-nowrap font-bold'>Winter Sale upto 50% Off</h4>
                    <p className='text-[15px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-5'>
                            <div className='w-11 h-11 flex items-center justify-center rounded-full bg-[#ede9fe]'>
                                <MdOutlineProductionQuantityLimits />
                            </div>
                            <span>Quality Products</span>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='w-11 h-11 flex items-center justify-center rounded-full bg-[#ffedd5] '>
                                <TbTruckDelivery width={20} height={20} />
                            </div>
                            <span>Fast Delivery</span>
                        </div >
                        <div className='flex items-center gap-5'>
                            <div className='w-11 h-11 flex items-center justify-center rounded-full bg-[#ffedd5]'>
                                <MdPayment />
                            </div>
                            <span>Easy Payment method</span>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='w-11 h-11 flex items-center justify-center rounded-full bg-[#fef9c3]'>
                                <MdDiscount />
                            </div>
                            <span>Easy Payment method</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountProducts;