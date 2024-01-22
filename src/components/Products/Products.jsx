import DiscountProducts from "../DiscountProducts/DiscountProducts";
import Container from "../container/Container";
import BestProducts from "./BestProducts";
import ProductCardInfo from "./ProductCardInfo";
import ProductsCard from "./ProductsCard";

const Products = () => {



    const ProductCardHeading = {
        title: 'Top Selling Products for you',
        Heading: 'Products',
        Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi'
    }


    return (
        <>
        <Container>
            <div className="flex flex-col items-center mt-[3rem] text-center">
              <ProductCardInfo info={ProductCardHeading}/>
            </div>
            <ProductsCard />
            <BestProducts/>
        </Container>
        <DiscountProducts/>
        </>
        
    );
};

export default Products;