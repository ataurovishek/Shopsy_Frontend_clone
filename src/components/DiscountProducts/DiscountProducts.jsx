import img1 from '../../assets/women/women2.jpg'

import { TbTruckDelivery } from "react-icons/tb";


import { MdDiscount, MdOutlineProductionQuantityLimits, MdPayment } from 'react-icons/md';
const DiscountProducts = () => {
    return (
      
            <div className='w-[80vw] mx-auto flex justify-center gap-[9vw] px-[5vw] '>
                  
                  <img src={img1} alt="" className='w-[390px] h-[330px] object-cover'/>
                 
                <div>
                    <h4 className='text-[2.3rem] font-bold'>Winter Sale upto 50% Off</h4>
                    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
                    <div className=''>
                        <div>
                            <div >
                                <MdOutlineProductionQuantityLimits />
                            </div>
                            <span>Quality Products</span>
                        </div>
                        <div >
                            <div>
                                <TbTruckDelivery />
                            </div>
                            <span>Fast Delivery</span>
                        </div >
                        <div>
                            <div >
                                <MdPayment />
                            </div>
                            <span>Easy Payment method</span>
                        </div>
                        <div>
                            <div>
                                <MdDiscount />
                            </div>
                            <span>Easy Payment method</span>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default DiscountProducts;