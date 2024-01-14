

import Image1 from '../../assets/hero/women.png'
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../../components/container/Container'

const Hero = () => {

    const sliderInfo = [
        {
            id: 1,
            img: Image1,
            title: "Upto 50% off on all Men's Wear",
            description:
                "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            img: Image2,
            title: "30% off on all Women's Wear",
            description:
                "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 3,
            img: Image3,
            title: "70% off on all Products Sale",
            description:
                "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ]


    var settings = {
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="relative overflow-hidden min-h-[700px] bg-gray-100">

            <div className=" absolute w-[700px] h-[700px] bg-[#f8d6a4] top-[-330px] rounded-2xl right-[20px] rotate-45"></div>

            <Container>
                <Slider {...settings}>

                    {
                        sliderInfo.map(item =>
                            <div key={item.id}>

                                <div className="flex items-center justify-center gap-[5rem] pb-15 pt-[7.4rem]">
                                    <div className='w-[50%] flex flex-col items-start gap-3 pt-2'>
                                        <h1 className='text-[4.5rem] font-[700] leading-[4.5rem]'>{item.title}</h1>
                                        <p>{item.description}</p>
                                        <button className='px-[15px] bg-[#fda726] py-2 text-[#fff] rounded-3xl text-[16px] font-semibold'>Order Now</button>
                                    </div>

                                    <div className='w-[40%] '>
                                        <img src={item.img} alt="" className='w-[80%]' />
                                    </div>

                                </div>
                            </div>
                        )
                    }


                </Slider>
            </Container>
        </div>
    );
};

export default Hero;