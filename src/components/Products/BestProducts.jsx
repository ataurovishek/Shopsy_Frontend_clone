
import outfit1 from '../../assets/shirt/shirt.png'
import outfit2 from '../../assets/shirt/shirt2.png'
import outfit3 from '../../assets/shirt/shirt3.png'
import Container from '../container/Container';
import { FaStar } from "react-icons/fa";
import ProductCardInfo from './ProductCardInfo';

const BestProducts = () => {


    const ProductCardHeading = {
        title: 'Top Rated Products for you',
        Heading: 'Best Products',
        Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi'
    }


    const BestProducts = [
        {
            id: 1,
            img: outfit1,
            title: 'Casual Wear',
            desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            id: 2,
            img: outfit2,
            title: 'Printed shirt',
            desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            id: 3,
            img: outfit3,
            title: 'Women shirt',
            desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
    ]

    return (
        <Container>
            <div className="flex flex-col ml-10">
                <ProductCardInfo info={ProductCardHeading} />
            </div>

            <div className='flex items-center justify-between mx-[10rem] mt-7'>

                {

                    BestProducts.map(item => (
                        <div key={item.id} className='w-36 flex flex-col items-center relative group'>

                            <img src={item.img} alt=""  className='z-30 group-hover:scale-[1.1] ease-out duration-300'/>


                            <div className= 'group-hover:bg-[#262525] w-[20rem] h-[17rem]  absolute top-20 px-1 text-center flex flex-col justify-end z-10 rounded-3xl'>
                                <div className="stars flex gap-1 justify-center">
                                    <FaStar color='orange' />
                                    <FaStar color='orange' />
                                    <FaStar color='orange' />
                                    <FaStar color='orange' />
                                </div>
                                <h5 className='text-xl font-bold group-hover:text-[#fff]'>{item.title}</h5>
                                <p className='text-sm w-[80%] pb-3 mx-auto text-[#5e6266] group-hover:text-[#fff]'>{item.desc}</p>
                                <button className='font-bold mb-5 mx-auto px-5 py-1 rounded-3xl bg-[#fea928] text-[#fff] group-hover:text-[#fea928]  group-hover:bg-[#fff]'>Order Now</button>
                            </div>
                        </div>
                    ))

                }

            </div>


        </Container>

    );
};

export default BestProducts;