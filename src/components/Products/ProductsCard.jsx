import { FaStar } from "react-icons/fa";
import Container from '../../components/container/Container'
import image from '../../assets/women/women.png'
import image2 from '../../assets/women/women2.jpg'
import image3 from '../../assets/women/women3.jpg'
import image4 from '../../assets/women/women4.jpg'
import image5 from '../../assets/women/women2.jpg'


const ProductsCard = () => {

    const ProductsDetails = [
        {
            id: 1,
            img: image,
            Title: 'Women Ethnic',
            color: 'white',
            rating: 5,
        },
        {
            id: 2,
            img: image2,
            Title: 'Women western',
            color: 'Reds',
            rating: 4.5,
        },
        {
            id: 3,
            img: image3,
            Title: 'Goggles',
            color: 'brown',
            rating: 4.7,
        },
        {
            id: 4,
            img: image4,
            Title: 'Printed T-Shirt',
            color: 'Yellow',
            rating: 4.4,
        },
        {
            id: 5,
            img: image5,
            Title: 'Fashin T-Shirt',
            color: 'Pink',
            rating: 4.5,
        },
    ]



    return (
        <Container>
            <div className="flex items-center justify-between mt-10 px-[5rem]">
                {ProductsDetails.map(item => (
                    <div key={item.id} className="flex flex-col">
                        <div className=" w-[9.4rem] h-56 rounded-md mb-5">
                            <img src={item.img} className="object-cover h-[100%] rounded-lg" alt="" />
                        </div>
                        <h5 className="text-[15px] font-semibold">{item.Title}</h5>
                        <p className="text-sm text-[#515151]">{item.color}</p>

                        <div className="flex items-center gap-1">
                            <FaStar color="orange" />
                            <span>{item.rating}</span>
                        </div>

                    </div>
                ))}

            </div>
            <button onClick={() => alert(`This product is not available right now!`)} className="mt-14 bg-[#ea9a22] block mx-auto text-[#fff] font-xl text-md px-5 py-[4px] rounded-md">View All Button</button>
        </Container>
    );
};

export default ProductsCard;